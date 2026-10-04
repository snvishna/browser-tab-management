const browserAPI = typeof browser !== "undefined" ? browser : chrome;

const container = document.getElementById('logs-container');

function renderLogs() {
    browserAPI.storage.local.get(['agent_logs'], (res) => {
        const logs = res.agent_logs || [];
        container.innerHTML = '';
        if (logs.length === 0) {
            container.innerHTML = '<div style="color: #8e8e93;">No logs available. Make an API call or open some tabs!</div>';
            return;
        }

        logs.forEach(log => {
            const div = document.createElement('div');
            div.className = 'log-entry';
            
            const time = new Date(log.timestamp).toLocaleTimeString();
            const typeClass = log.status === 'error' ? 'type-error' : (log.status === 'success' ? 'type-success' : 'type-pending');
            
            div.innerHTML = `
                <div>
                    <span class="log-time">[${time}]</span>
                    <span class="log-type ${typeClass}">${log.status.toUpperCase()}</span>
                    <strong>${log.type} - ${log.action}</strong>
                </div>
                <div class="log-details">${log.details}</div>
            `;
            container.appendChild(div);
        });
    });
}

document.getElementById('btn-refresh').addEventListener('click', renderLogs);
document.getElementById('btn-clear').addEventListener('click', () => {
    browserAPI.storage.local.remove('agent_logs', () => {
        renderLogs();
    });
});

renderLogs();
