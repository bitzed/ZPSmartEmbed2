document.addEventListener('DOMContentLoaded', () => {
    const phoneNumberInput = document.getElementById('phoneNumber');
    const callButton = document.getElementById('callButton');
    const iframe = document.getElementById('zoom-embeddable-phone-iframe');

    callButton.addEventListener('click', () => {
        const phoneNumber = phoneNumberInput.value;
        if (phoneNumber) {
            iframe.contentWindow.postMessage({
                type: 'zp-make-call',
                data: {
                    number: phoneNumber,
                    autoDial: true
                }
            }, 'https://applications.zoom.us');
        } else {
            alert('電話番号を入力してください。');
        }
    });

    // Zoom Phone Smart Embedの初期化
    iframe.contentWindow.postMessage({
        type: 'zp-init-config',
        data: {
            enableSavingLog: false,
            enableAutoLog: false,
            enableContactSearching: false,
            enableContactMatching: false
        }
    }, 'https://applications.zoom.us');
});