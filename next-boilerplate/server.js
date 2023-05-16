const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({
    dev,
});

const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
    const app = express();
    let isDisableKeepAlive = false;

    // keep-alive 해제용 미들웨어
    app.use(function (req, res, next) {
        // 전역 변수가 true면 요청 오면 connection을 강제로 닫는다.
        if (isDisableKeepAlive) {
            res.set('Connection', 'close');
        }
        next();
    });

    app.all('*', (req, res) => {
        handle(req, res);
    });

    // 만일 process로부터 SIGINT 이벤트를 받으면..
    process.on('SIGINT', function () {
        // SIGINT 시그널을 받으면 전역변수를 true로 만들어 앞으로 요청오면 종료해 버리게 만든다.
        isDisableKeepAlive = true;
        listeningServer.close(function () {
            process.exit(0) // 정상 종료
        });
    });

    const listeningServer = app.listen(process.env.PORT, function () {
        process.send('ready') // 서버 구동이 완료되면 프로세스에 'ready'를 보냄
    });
});
