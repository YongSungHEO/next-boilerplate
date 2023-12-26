module.exports = {
    apps: [{
        name: 'sample-dev',
        script: './server.js',
        instances: 'max',
        exec_mode: 'cluster',
        max_memory_restart: '2G',
        env: {
            PORT: '1111',
            NODE_ENV: 'production',
        },
        wait_ready: true, // 마스터 프로세스에게 ready 이벤트를 기다려라
        listen_timeout: 50000, // ready 이벤트를 기다릴 시간값(ms)
        kill_timeout: 5000 // SIGINT ↔ SIGKILL 대기시간을 5초로 설정
    }]
};
