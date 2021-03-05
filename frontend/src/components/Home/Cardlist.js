export const Cardlist = [
    {
        title: 'Billing',
        //Customer, Supplier
        /*child: [
            {
                title: 'Customer Billing',
                url: '#',
                cName: 'nav-links-child'
            },
            {
                title: 'Supplier Billing',
                url: '#',
                cName: 'nav-links-child'
            }
        ],*/
        url: '/billing',
        iconClassName: 'fas fa-file-invoice',
        cName: 'home-links',
        idName: 'first'
    },
    {
        title: 'Reports',
        // General, GST, Expiry, Damaged Goods
        /*child: [
            {
                title: 'General Report',
                url: '#',
                cName: 'nav-links-child'
            },
            {
                title: 'GST Report',
                url: '#',
                cName: 'nav-links-child'
            },
            {
                title: 'Expiry Report',
                url: '#',
                cName: 'nav-links-child'
            },
            {
                title: 'Damaged Good Report',
                url: '#',
                cName: 'nav-links-child'
            }
        ],*/
        url: '/reports',
        iconClassName: 'fas fa-table',
        cName: 'home-links',
        idName: 'second'
    },
    {
        title: 'Customer',
        url: '/customer',
        iconClassName: 'fas fa-users',
        cName: 'home-links',
        idName: 'third'
    },
    {
        title: 'Supplier',
        url: '/supplier',
        iconClassName: 'fas fa-people-carry',
        cName: 'home-links',
        idName: 'fourth'
    },
]