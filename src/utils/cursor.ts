
const cursorAnim = () => {
    const cursorDot = document.querySelector<HTMLDivElement>("[data-cursor-dot]");
    const cursorOutline = document.querySelector<HTMLDivElement>("[data-cursor-outline]");
    const para = document.querySelectorAll<HTMLElement>("p");
    const title = document.querySelector<HTMLElement>("h1");
    const btn = document.querySelectorAll<HTMLElement>("button");
    const secondTitle = document.querySelectorAll<HTMLElement>("h2");


    window.addEventListener('mousemove', function (e) {
        const posX = e.clientX;
        const posY = e.clientY;
        if (cursorDot && cursorOutline) {
            cursorDot.style.left = `${posX}px`
            cursorDot.style.top = `${posY}px`
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" })

        }

    })
    if (para) {

        para.forEach((p: any) => {
            p.addEventListener('mouseenter', function () {

                if (cursorDot) {
                    cursorDot.style.width = '50px'
                    cursorDot.style.height = `50px`


                }

            })
            p.addEventListener('mouseleave', function () {

                if (cursorDot) {
                    cursorDot.style.width = '30px'
                    cursorDot.style.height = '30px'
                }

            })
        })

    }
    if (title) {
        title.addEventListener('mouseenter', function () {

            if (cursorDot) {
                cursorDot.style.width = '50px'
                cursorDot.style.height = `50px`
            }

        })
        title.addEventListener('mouseleave', function () {

            if (cursorDot) {
                cursorDot.style.width = '30px'
                cursorDot.style.height = '30px'
            }

        })
    }
    if (btn) {
        btn.forEach((p: any) => {
            p.addEventListener('mouseenter', function () {

                if (cursorDot) {
                    cursorDot.style.width = '50px'
                    cursorDot.style.height = `50px`
                }

            })
            p.addEventListener('mouseleave', function () {

                if (cursorDot) {
                    cursorDot.style.width = '30px'
                    cursorDot.style.height = '30px'
                }

            })
        })
    }
    if (secondTitle) {
        secondTitle.forEach((p: any) => {
            p.addEventListener('mouseenter', function () {

                if (cursorDot) {
                    cursorDot.style.width = '50px'
                    cursorDot.style.height = `50px`
                }

            })
            p.addEventListener('mouseleave', function () {

                if (cursorDot) {
                    cursorDot.style.width = '30px'
                    cursorDot.style.height = '30px'
                }

            })
        })
    }

}

export { cursorAnim }