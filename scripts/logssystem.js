window.logssystem = {
    log: function (title = 'No title', data) {
        console.log('Logsystem >> ' + title, data);
    },
    warning: function (title = 'No title', data) {
        console.warn('Logsystem >> ' + title, data);
    },
    error: function (title = 'No title', data) {
        console.error('Logsystem >> ' + title, data);
    }
}