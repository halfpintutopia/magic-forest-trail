(function () {
    const FRAGMENT = {
        TRAILS: '#trails'
    }

    const CLASS = {
        ACTIVE: 'active',
        NAV_ITEM_TRAILS: '.nav-item-trails',
        MENU_ITEMS: 'ul.menu li',
        MAIN_NAVIGATION: '.main-navigation'
    }

    const EVENT = {
        HASHCHANGE: 'hashchange',
        RESIZE: 'resize'
    }

    const htmlElementMap = {
        navItemTrails: '',
        menuItems: '',
        navigationHeight: ''
    }

    const initHTMLElements = () => {
        htmlElementMap.menuItems = document.querySelectorAll(CLASS.MENU_ITEMS)
        htmlElementMap.navItemTrails = document.querySelector(CLASS.NAV_ITEM_TRAILS)
        htmlElementMap.mainNavigation = document.querySelector(CLASS.MAIN_NAVIGATION)
    }

    const initEvents = () => {
        window.addEventListener(EVENT.HASHCHANGE, toggleNavActiveCls)
        window.addEventListener(EVENT.RESIZE, setScrollPadding)

        if (htmlElementMap.mainNavigation) {
            setScrollPadding()
        }
    }


    const toggleNavActiveCls = () => {
        if (location.hash === FRAGMENT.TRAILS) {
            htmlElementMap.menuItems.forEach((item) => {
                item.classList.remove(CLASS.ACTIVE)
            })
            htmlElementMap.navItemTrails.classList.add(CLASS.ACTIVE)
        } else {
            htmlElementMap.navItemTrails.classList.remove(CLASS.ACTIVE)
        }
    }

    const setScrollPadding = () => {
        if (htmlElementMap.mainNavigation) {
            const mainNavigationHeight = htmlElementMap.mainNavigation.offsetHeight
            document.documentElement.style.setProperty('--scroll-padding', `${mainNavigationHeight}px`)
        }
    }


    initHTMLElements()
    initEvents()
})();
