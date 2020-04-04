class KeyBoard {



    Element = {
        areaKeyBoard: null,
        KeysBoard: null,
        textarea: null,
        Keys: []
    }

    Methods = {
        oninput: null,
        onclose: null
    }

    Properties = {
        caps: false,
        shift: false,
        control :false,
        alt: false
    }



    KeysValuesEng = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
        'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
        'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"', 'Enter',
        'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', "↑", 'ShiftR',
        'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '←', '↓', '→'];


    KeysValuesRu = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
        'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del',
        'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
        'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'ShiftR',
        'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '←', '↓', '→'];

    KeysEventCode = [
        'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
        'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
        'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
        'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
        'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight']


    SystemKeys = ['Backspace', 'Tab', 'CapsLock', 'Shift', 'Win', 'Alt', 'Space', 'Ctrl', 'ShiftR']
    ShiftKeysCode = ['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'BracketLeft', 'BracketRight', 'Backslash', 'Semicolon', 'Quote', 'Comma', 'Period', 'Slash']
    ShiftKeysValue = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', '|', ':', '"', '<', '>', '?']
    ShiftKeysCode2 = ['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backslash', 'Slash']
    ShiftKeysValue2 = ['!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', '|', ',']
    ShiftKeysNormalValue = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '[', ']', '\\', ';', '"', ',', '.', '/']


    initial() {
        //создаем клавиутуру
        this.Element.areaKeyBoard = document.createElement("div");
        this.Element.KeysBoard = document.createElement("div");
        this.Element.textarea = document.createElement("textarea");

        //добавление css 
        this.Element.areaKeyBoard.classList.add("areaKeyBoard");
        this.Element.KeysBoard.classList.add("keysBoard");
        this.Element.textarea.classList.add("textarea");
        this.Element.KeysBoard.appendChild(this._createKeys());

        //добавить Dom
        this.Element.areaKeyBoard.appendChild(this.Element.KeysBoard);
        document.body.appendChild(this.Element.areaKeyBoard);
        document.body.appendChild(this.Element.textarea);

    }





    _createKeys() {

        const fragment = document.createDocumentFragment();




        const buttonToBr = ['Backspace', 'Del', 'Enter', 'ShiftR'];
        this.KeysValuesEng.forEach(element => {
            let element1 = document.createElement('button');
            element1.classList.add('button');
            element1.setAttribute('type', 'button');
            element1.innerText = element;
            fragment.appendChild(element1);
            if (buttonToBr.includes(element)) {
                fragment.appendChild(document.createElement("br"));
            }

        })



        return fragment;

    }



    mouseClick() {

        document.querySelectorAll('.button').forEach(elem => elem.addEventListener('click', () => {

            switch (event.target.innerText) {
                case "Backspace":
                    this.Element.textarea.value = this.Element.textarea.value.slice(0, -1);
                    break;

                case "Del":
                    this.Element.textarea.value = this.Element.textarea.value.slice(0, -1);
                    break;

                case "Enter":
                    this.Element.textarea.value += "\r\n";
                    break;

                case "Tab":
                    this.Element.textarea.value += "\t";
                    break;

                case "Space":
                    this.Element.textarea.value += " ";
                    break;

                case "CapsLock":
                    this.Properties.caps = !this.Properties.caps;

                    if (this.Properties.caps)
                        document.querySelectorAll(".button").forEach(elem => {
                            if (elem.innerText.length == 1)
                                elem.innerText = elem.innerText.toUpperCase();
                        })
                    else {
                        document.querySelectorAll(".button").forEach(elem => {
                            if (elem.innerText.length == 1)
                                elem.innerText = elem.innerText.toLowerCase();
                        })
                    }
                    break;

                default:
                    if (!this.SystemKeys.includes(event.target.innerText))
                        this.Element.textarea.value += event.target.innerText;
            }
        }))

    }

    keyDown() {
        let buttons = document.querySelectorAll('.button');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].setAttribute('id', `${this.KeysEventCode[i]}`)
        }

        window.addEventListener('keydown', (event) => {
            document.querySelectorAll('.button').forEach(elem => {

                if (event.code == elem.getAttribute("id")) {
                    elem.classList.add('active');
                    elem.click();

                }

            })

        });

    }

    keyUp() {
        window.addEventListener('keyup', (event) => {
            document.querySelectorAll('.button').forEach(elem => {

                if (event.code == elem.getAttribute("id")) {
                    elem.classList.remove('active');
                }

            })

        })
    }



    keyShiftUp() {
        window.addEventListener('keyup', (event) => {

            if (event.code == document.querySelector('#ShiftLeft').getAttribute('id'))
                document.querySelector('#ShiftLeft').dispatchEvent(new Event('mouseup'));

        })
    }


    keyShiftDown() {
        window.addEventListener('keydown', (event) => {

            if (event.code == document.querySelector('#ShiftLeft').getAttribute('id'))
                document.querySelector('#ShiftLeft').dispatchEvent(new Event('mousedown'));

        })
    }

    MouseShiftDown() {
        document.querySelector('#ShiftLeft').addEventListener('mousedown', (event) => {

            if (!this.Properties.caps)
                document.querySelectorAll(".button").forEach(elem => {
                    if (elem.innerText.length == 1)
                        elem.innerText = elem.innerText.toUpperCase();

                })
            else {
                document.querySelectorAll(".button").forEach(elem => {
                    if (elem.innerText.length == 1)
                        elem.innerText = elem.innerText.toLowerCase();
                })
            }

            if (!this.Properties.shift) {
                for (let i = 0; i < this.ShiftKeysCode.length; i++) {
                    document.querySelector(`#${this.ShiftKeysCode[i]}`).innerText = this.ShiftKeysValue[i];
                }
            }
            else {
                for (let i = 0; i < this.ShiftKeysCode.length; i++) {
                    document.querySelector(`#${this.ShiftKeysCode2[i]}`).innerText = this.ShiftKeysValue2[i];
                }

            }
        })
    }


    MouseShiftUp() {
        document.querySelector('#ShiftLeft').addEventListener('mouseup', (event) => {
            if (!this.Properties.caps)
                document.querySelectorAll(".button").forEach(elem => {
                    if (elem.innerText.length == 1)
                        elem.innerText = elem.innerText.toLowerCase();

                })
            else {
                document.querySelectorAll(".button").forEach(elem => {
                    if (elem.innerText.length == 1)
                        elem.innerText = elem.innerText.toUpperCase();
                })
            }

            for (let i = 0; i < this.ShiftKeysCode.length; i++) {
                document.querySelector(`#${this.ShiftKeysCode[i]}`).innerText = this.ShiftKeysNormalValue[i];
            }


        })
    }


    languageValue() {
        window.addEventListener('keydown', (event) => {
            if (event.code == "ControlLeft")
                this.Properties.control = true;
                if ((this.Properties.control) && (this.Properties.alt)) {
                    this.Properties.shift = !this.Properties.shift;
                    let i = 0;
                    if (!this.Properties.shift) {
                        document.querySelectorAll(".button").forEach((elem) => {
                            elem.innerText = this.KeysValuesRu[i];
                            i++;
                        });
                    }
                    else {
                        document.querySelectorAll(".button").forEach((elem, i) => {
                            elem.innerText = this.KeysValuesEng[i];
                            i++;
                        });
                    }
                }
            
        })

        window.addEventListener('keydown', (event) => {
            if (event.code == "AltLeft")
               this.Properties.alt = true;
               if ((this.Properties.control) && (this.Properties.alt)) {
                this.Properties.shift = !this.Properties.shift;
                let i = 0;
                if (!this.Properties.shift) {
                    document.querySelectorAll(".button").forEach((elem) => {
                        elem.innerText = this.KeysValuesRu[i];
                        i++;
                    });
                }
                else {
                    document.querySelectorAll(".button").forEach((elem, i) => {
                        elem.innerText = this.KeysValuesEng[i];
                        i++;
                    });
                }
            }
            
        })

        window.addEventListener('keyup', (event) => {
            if (event.code == "ControlLeft")
                this.Properties.control = false;
                if ((this.Properties.control) && (this.Properties.alt)) {
                    this.Properties.shift = !this.Properties.shift;
                    let i = 0;
                    if (!this.Properties.shift) {
                        document.querySelectorAll(".button").forEach((elem) => {
                            elem.innerText = this.KeysValuesRu[i];
                            i++;
                        });
                    }
                    else {
                        document.querySelectorAll(".button").forEach((elem, i) => {
                            elem.innerText = this.KeysValuesEng[i];
                            i++;
                        });
                    }
                }
          
        })

        window.addEventListener('keyup', (event) => {
            if (event.code == "AltLeft")
                this.Properties.alt = false;
                if ((this.Properties.control) && (this.Properties.alt)) {
                    this.Properties.shift = !this.Properties.shift;
                    let i = 0;
                    if (!this.Properties.shift) {
                        document.querySelectorAll(".button").forEach((elem) => {
                            elem.innerText = this.KeysValuesRu[i];
                            i++;
                        });
                    }
                    else {
                        document.querySelectorAll(".button").forEach((elem, i) => {
                            elem.innerText = this.KeysValuesEng[i];
                            i++;
                        });
                    }
                }
       
        })

    }

}









let keysBoard = new KeyBoard();
keysBoard.initial();
keysBoard.mouseClick();
keysBoard.keyDown();
keysBoard.keyUp();
keysBoard.MouseShiftDown();
keysBoard.MouseShiftUp();
keysBoard.keyShiftDown();
keysBoard.keyShiftUp();
keysBoard.languageValue();