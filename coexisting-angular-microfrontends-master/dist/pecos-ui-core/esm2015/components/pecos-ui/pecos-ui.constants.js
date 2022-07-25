export const headerLinks = (includeEmulate = false) => {
    const links = [
        { text: 'About', role: [] },
        { text: 'Helpful Links', role: [] },
        { text: 'Knowledge Base', role: [] },
        {
            text: 'Quick References',
            role: ['CMS', 'Provider'],
            children: [
                { text: 'Frequently Asked Questions' },
                { text: 'User Guide' },
                { text: 'Quick Reference' },
            ],
        },
        {
            icon: 'user',
            text: '%user%',
            role: ['CMS', 'Provider'],
            children: [
                { text: 'View Authorizations' },
                { text: 'Logout', href: '/logout' },
            ],
        },
    ];
    if (includeEmulate) {
        links.push({
            text: 'Emulate',
            role: [],
            children: [
                { text: 'mac', emulate: { username: 'mac-user', role: 'CMS' } },
                {
                    text: 'pecos2test1',
                    emulate: { username: 'pecos2test2', role: 'Provider' },
                },
                {
                    text: 'pecos2test2',
                    emulate: { username: 'pecos2test2', role: 'Provider' },
                },
                { text: 'CMS/Mac Login', href: '/login/cms' },
            ],
        });
    }
    return links;
};
export const sideLinks = [
    {
        href: '/dashboard',
        icon: 'home',
        text: 'Home',
    },
    {
        href: '/workqueue',
        icon: 'work-queue',
        role: ['CMS'],
        text: 'Work Queue',
    },
    {
        href: '/reports',
        icon: 'reports',
        role: ['CMS'],
        text: 'Reports',
    },
    {
        href: '/search',
        icon: 'search',
        role: ['CMS'],
        text: 'Search',
    },
    {
        href: '/search',
        icon: 'my-connections',
        role: ['Provider'],
        text: 'My Connections',
    },
    {
        href: '/examples',
        icon: 'help',
        text: 'Knowledge Base',
    },
];
export const footerLinks = [
    { text: 'Accessibility' },
    {
        text: 'CMS.gov',
        href: 'https://www.cms.gov/',
    },
    {
        text: 'Department of Health and Human Services (HHS)',
        href: 'https://www.cms.gov/',
    },
    {
        text: 'Agreements & Policies',
        href: 'https://www.cms.gov/about-cms/agency-information/aboutwebsite',
    },
    { text: 'How to Use this Site', tooltip: 'Knowledge Base to be developed' },
    { text: 'Contact', tooltip: 'Knowledge Base to be developed' },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVjb3MtdWkuY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6IkM6L3NvdXJjZS9NRkUvcGVjb3MtdWktY29yZS1tYXN0ZXIvcGVjb3MtdWktY29yZS1tYXN0ZXIvc3JjL2xpYi8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGVjb3MtdWkvcGVjb3MtdWkuY29uc3RhbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBRyxDQUFDLGNBQWMsR0FBRyxLQUFLLEVBQUUsRUFBRTtJQUNwRCxNQUFNLEtBQUssR0FBa0I7UUFDM0IsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUU7UUFDM0IsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUU7UUFDbkMsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRTtRQUNwQztZQUNFLElBQUksRUFBRSxrQkFBa0I7WUFDeEIsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQztZQUN6QixRQUFRLEVBQUU7Z0JBQ1IsRUFBRSxJQUFJLEVBQUUsNEJBQTRCLEVBQUU7Z0JBQ3RDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtnQkFDdEIsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUU7YUFDNUI7U0FDRjtRQUNEO1lBQ0UsSUFBSSxFQUFFLE1BQU07WUFDWixJQUFJLEVBQUUsUUFBUTtZQUNkLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUM7WUFDekIsUUFBUSxFQUFFO2dCQUNSLEVBQUUsSUFBSSxFQUFFLHFCQUFxQixFQUFFO2dCQUMvQixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTthQUNwQztTQUNGO0tBQ0YsQ0FBQztJQUNGLElBQUksY0FBYyxFQUFFO1FBQ2xCLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDVCxJQUFJLEVBQUUsU0FBUztZQUNmLElBQUksRUFBRSxFQUFFO1lBQ1IsUUFBUSxFQUFFO2dCQUNSLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFDL0Q7b0JBQ0UsSUFBSSxFQUFFLGFBQWE7b0JBQ25CLE9BQU8sRUFBRSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtpQkFDdkQ7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLGFBQWE7b0JBQ25CLE9BQU8sRUFBRSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtpQkFDdkQ7Z0JBQ0QsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUU7YUFDOUM7U0FDRixDQUFDLENBQUM7S0FDSjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sU0FBUyxHQUFrQjtJQUN0QztRQUNFLElBQUksRUFBRSxZQUFZO1FBQ2xCLElBQUksRUFBRSxNQUFNO1FBQ1osSUFBSSxFQUFFLE1BQU07S0FDYjtJQUNEO1FBQ0UsSUFBSSxFQUFFLFlBQVk7UUFDbEIsSUFBSSxFQUFFLFlBQVk7UUFDbEIsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ2IsSUFBSSxFQUFFLFlBQVk7S0FDbkI7SUFDRDtRQUNFLElBQUksRUFBRSxVQUFVO1FBQ2hCLElBQUksRUFBRSxTQUFTO1FBQ2YsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ2IsSUFBSSxFQUFFLFNBQVM7S0FDaEI7SUFDRDtRQUNFLElBQUksRUFBRSxTQUFTO1FBQ2YsSUFBSSxFQUFFLFFBQVE7UUFDZCxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDYixJQUFJLEVBQUUsUUFBUTtLQUNmO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsU0FBUztRQUNmLElBQUksRUFBRSxnQkFBZ0I7UUFDdEIsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDO1FBQ2xCLElBQUksRUFBRSxnQkFBZ0I7S0FDdkI7SUFDRDtRQUNFLElBQUksRUFBRSxXQUFXO1FBQ2pCLElBQUksRUFBRSxNQUFNO1FBQ1osSUFBSSxFQUFFLGdCQUFnQjtLQUN2QjtDQUNGLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxXQUFXLEdBQWtCO0lBQ3hDLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRTtJQUN6QjtRQUNFLElBQUksRUFBRSxTQUFTO1FBQ2YsSUFBSSxFQUFFLHNCQUFzQjtLQUM3QjtJQUNEO1FBQ0UsSUFBSSxFQUFFLCtDQUErQztRQUNyRCxJQUFJLEVBQUUsc0JBQXNCO0tBQzdCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsdUJBQXVCO1FBQzdCLElBQUksRUFBRSwrREFBK0Q7S0FDdEU7SUFDRCxFQUFFLElBQUksRUFBRSxzQkFBc0IsRUFBRSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUU7SUFDM0UsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRTtDQUMvRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGVjb3NVaUxpbmsgfSBmcm9tICcuL3BlY29zLXVpLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBoZWFkZXJMaW5rcyA9IChpbmNsdWRlRW11bGF0ZSA9IGZhbHNlKSA9PiB7XG4gIGNvbnN0IGxpbmtzOiBQZWNvc1VpTGlua1tdID0gW1xuICAgIHsgdGV4dDogJ0Fib3V0Jywgcm9sZTogW10gfSxcbiAgICB7IHRleHQ6ICdIZWxwZnVsIExpbmtzJywgcm9sZTogW10gfSxcbiAgICB7IHRleHQ6ICdLbm93bGVkZ2UgQmFzZScsIHJvbGU6IFtdIH0sXG4gICAge1xuICAgICAgdGV4dDogJ1F1aWNrIFJlZmVyZW5jZXMnLFxuICAgICAgcm9sZTogWydDTVMnLCAnUHJvdmlkZXInXSxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHsgdGV4dDogJ0ZyZXF1ZW50bHkgQXNrZWQgUXVlc3Rpb25zJyB9LFxuICAgICAgICB7IHRleHQ6ICdVc2VyIEd1aWRlJyB9LFxuICAgICAgICB7IHRleHQ6ICdRdWljayBSZWZlcmVuY2UnIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjogJ3VzZXInLFxuICAgICAgdGV4dDogJyV1c2VyJScsXG4gICAgICByb2xlOiBbJ0NNUycsICdQcm92aWRlciddLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgeyB0ZXh0OiAnVmlldyBBdXRob3JpemF0aW9ucycgfSxcbiAgICAgICAgeyB0ZXh0OiAnTG9nb3V0JywgaHJlZjogJy9sb2dvdXQnIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF07XG4gIGlmIChpbmNsdWRlRW11bGF0ZSkge1xuICAgIGxpbmtzLnB1c2goe1xuICAgICAgdGV4dDogJ0VtdWxhdGUnLFxuICAgICAgcm9sZTogW10sXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB7IHRleHQ6ICdtYWMnLCBlbXVsYXRlOiB7IHVzZXJuYW1lOiAnbWFjLXVzZXInLCByb2xlOiAnQ01TJyB9IH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAncGVjb3MydGVzdDEnLFxuICAgICAgICAgIGVtdWxhdGU6IHsgdXNlcm5hbWU6ICdwZWNvczJ0ZXN0MicsIHJvbGU6ICdQcm92aWRlcicgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdwZWNvczJ0ZXN0MicsXG4gICAgICAgICAgZW11bGF0ZTogeyB1c2VybmFtZTogJ3BlY29zMnRlc3QyJywgcm9sZTogJ1Byb3ZpZGVyJyB9LFxuICAgICAgICB9LFxuICAgICAgICB7IHRleHQ6ICdDTVMvTWFjIExvZ2luJywgaHJlZjogJy9sb2dpbi9jbXMnIH0sXG4gICAgICBdLFxuICAgIH0pO1xuICB9XG4gIHJldHVybiBsaW5rcztcbn07XG5cbmV4cG9ydCBjb25zdCBzaWRlTGlua3M6IFBlY29zVWlMaW5rW10gPSBbXG4gIHtcbiAgICBocmVmOiAnL2Rhc2hib2FyZCcsXG4gICAgaWNvbjogJ2hvbWUnLFxuICAgIHRleHQ6ICdIb21lJyxcbiAgfSxcbiAge1xuICAgIGhyZWY6ICcvd29ya3F1ZXVlJyxcbiAgICBpY29uOiAnd29yay1xdWV1ZScsXG4gICAgcm9sZTogWydDTVMnXSxcbiAgICB0ZXh0OiAnV29yayBRdWV1ZScsXG4gIH0sXG4gIHtcbiAgICBocmVmOiAnL3JlcG9ydHMnLFxuICAgIGljb246ICdyZXBvcnRzJyxcbiAgICByb2xlOiBbJ0NNUyddLFxuICAgIHRleHQ6ICdSZXBvcnRzJyxcbiAgfSxcbiAge1xuICAgIGhyZWY6ICcvc2VhcmNoJyxcbiAgICBpY29uOiAnc2VhcmNoJyxcbiAgICByb2xlOiBbJ0NNUyddLFxuICAgIHRleHQ6ICdTZWFyY2gnLFxuICB9LFxuICB7XG4gICAgaHJlZjogJy9zZWFyY2gnLFxuICAgIGljb246ICdteS1jb25uZWN0aW9ucycsXG4gICAgcm9sZTogWydQcm92aWRlciddLFxuICAgIHRleHQ6ICdNeSBDb25uZWN0aW9ucycsXG4gIH0sXG4gIHtcbiAgICBocmVmOiAnL2V4YW1wbGVzJyxcbiAgICBpY29uOiAnaGVscCcsXG4gICAgdGV4dDogJ0tub3dsZWRnZSBCYXNlJyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBmb290ZXJMaW5rczogUGVjb3NVaUxpbmtbXSA9IFtcbiAgeyB0ZXh0OiAnQWNjZXNzaWJpbGl0eScgfSxcbiAge1xuICAgIHRleHQ6ICdDTVMuZ292JyxcbiAgICBocmVmOiAnaHR0cHM6Ly93d3cuY21zLmdvdi8nLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ0RlcGFydG1lbnQgb2YgSGVhbHRoIGFuZCBIdW1hbiBTZXJ2aWNlcyAoSEhTKScsXG4gICAgaHJlZjogJ2h0dHBzOi8vd3d3LmNtcy5nb3YvJyxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdBZ3JlZW1lbnRzICYgUG9saWNpZXMnLFxuICAgIGhyZWY6ICdodHRwczovL3d3dy5jbXMuZ292L2Fib3V0LWNtcy9hZ2VuY3ktaW5mb3JtYXRpb24vYWJvdXR3ZWJzaXRlJyxcbiAgfSxcbiAgeyB0ZXh0OiAnSG93IHRvIFVzZSB0aGlzIFNpdGUnLCB0b29sdGlwOiAnS25vd2xlZGdlIEJhc2UgdG8gYmUgZGV2ZWxvcGVkJyB9LFxuICB7IHRleHQ6ICdDb250YWN0JywgdG9vbHRpcDogJ0tub3dsZWRnZSBCYXNlIHRvIGJlIGRldmVsb3BlZCcgfSxcbl07XG4iXX0=