(function () {
    const FRAGMENT = {
        TRAILS: '#trails'
    }

    const CLASS = {
        ACTIVE: 'active',
        NAV_ITEM_TRAILS: '.nav-item-trails',
        MENU_ITEMS: 'ul.menu li'
    }

    const EVENT = {
        HASHCHANGE: 'hashchange'
    }

    const htmlElementMap = {
        navItemTrails: '',
        menuItems: ''
    }

    const initHTMLElements = () => {
        htmlElementMap.menuItems = document.querySelectorAll(CLASS.MENU_ITEMS)
        htmlElementMap.navItemTrails = document.querySelector(CLASS.NAV_ITEM_TRAILS)
    }

    const initEvents = () => {
        window.addEventListener(EVENT.HASHCHANGE, toggleNavActiveCls)
    }


    const toggleNavActiveCls = () => {
        if (location.hash === FRAGMENT.TRAILS) {
            htmlElementMap.menuItems.forEach((item) => {
                item.classList.remove(CLASS.ACTIVE)
            })
            htmlElementMap.navItemTrails.classList.toggle(CLASS.ACTIVE)
        }
    }

    initHTMLElements()
    initEvents()
})();

