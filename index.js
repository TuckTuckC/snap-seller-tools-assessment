const createFrame = () => {
    document.body.innerHTML = ''
    iframe = document.createElement('iframe');
    iframe.setAttribute('id', 'iframe');
    document.body.appendChild(iframe);
    iframe.setAttribute('src', window.location.href);
    iframe.style.height = "100vh";
    iframe.style.width = "100vw";
    iframe.style.border = "0";
}

// Creates iFrame
setTimeout(() => {
    createFrame()
})

const deletePost = async () => {

    // Go To Closet
    await setTimeout(() => {

        const myCloset = iframe.contentWindow.document.querySelector("#app > header > nav.header--fixed > div > ul > li.ps--r.header__account-info-list__item > div > div:nth-child(2) > div > ul > li:nth-child(1) > a");

        myCloset.click();
    })

    // First Post
    await setTimeout(() => {
        const post = iframe.contentWindow.document.querySelector("#content > div > div:nth-child(2) > div > div > section > div.tiles_container.m--t--1 > div.tile.col-x12.col-l6.col-s8.p--2 > div > a");
        post.click()
    }, 2000)

    // Edit Post
    await setTimeout(() => {
        const edit = iframe.contentWindow.document.querySelector("#content > div > div > div:nth-child(3) > div.listing__layout-grid.listing__layout-item.listing__info.col-x24.col-m12 > div.listing__header-container.jc--sb.ai--c > div.d--fl.ai--c > a");
        edit.click()
    }, 4000)

    // Delete Post
    await setTimeout(() => {
        const dlt = iframe.contentWindow.document.querySelector("#content > div > div:nth-child(1) > div > div.form__actions > div > a.td--ul.tc--lg");
        dlt.click()
    }, 8000)

    // Confirm Delete
    await setTimeout(() => {
        const confirm = iframe.contentWindow.document.querySelector("#content > div > div:nth-child(1) > div > div:nth-child(17) > div.modal.simple-modal.modal--in.modal--top.modal--small > div.modal__footer.modal__footer--borderless > div > button.btn.btn--primary")
        confirm.click()
    }, 10000)
}

// Deletes Post
setTimeout(() => {
    deletePost()
}, 1000)