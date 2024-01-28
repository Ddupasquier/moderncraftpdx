export const navItems = [
    // { text: 'Home', href: '/', dropdown: false },
    {
        text: 'Services',
        dropdown: true,
        dropdownItems: [
            { text: 'Kitchen Remodeling', href: '/services/kitchen-remodeling' },
            { text: 'Bathroom Remodeling', href: '/services/bathroom-remodeling' }
            // ... more items
        ]
    },
    { text: 'Portfolio', href: '/portfolio', dropdown: false },
    { text: 'Process', href: '/process', dropdown: false },
    { text: 'About', href: '/about', dropdown: false },
    { text: 'Contact', href: '/contact', dropdown: false }
];