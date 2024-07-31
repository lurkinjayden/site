document.addEventListener('DOMContentLoaded', function() {
    var quoteID = document.getElementById('quote');
    var quote = `"angel sucked my cock | dum spiro, spero"`;
    var cursor = document.createElement('span');
    cursor.className = 'cursor';
    cursor.style.borderColor = 'white';

    quoteID.appendChild(cursor);

    function type(text, i, fnCallback) {
        if (i < text.length) {
            quoteID.innerHTML = text.substring(0, i+1);
            adjust();
            setTimeout(function() {
                type(text, i + 1, fnCallback)
            }, 70);
        } else if (typeof fnCallback == 'function') {
            setTimeout(fnCallback, 500);
        }
    }

    function backspace(text, i, fnCallback) {
        if (i >= 0) {
            quoteID.innerHTML = text.substring(0, i);
            adjust();
            setTimeout(function() {
                backspace(text, i - 1, fnCallback)
            }, 40);
        } else if (typeof fnCallback == 'function') {
            setTimeout(fnCallback, 300);
        }
    }

    function adjust() {
        var textWidth = quoteID.clientWidth;
        cursor.style.marginLeft = textWidth + 'px';
    }

    function startAnim() {
        if (typeof quote !== 'undefined') {
            type(quote, 0, function() {
                backspace(quote, quote.length, function() {
                    startAnim();
                });
            });
        }
    }

    var enter = document.getElementById('enter');
    enter.addEventListener('click', function() {
        enter.style.opacity = '0';
        setTimeout(function() {
            enter.style.display = 'none'; 
            quoteID.style.opacity = '0';
            quoteID.style.display = 'block'; 
            setTimeout(function() {
                quoteID.style.opacity = '1';
                startAnim();
            }, 50);
        }, 500);
    });
});
