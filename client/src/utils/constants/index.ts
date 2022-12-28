import { ISidebarLink } from './../interfaces'

export const sidebarLinks = {
  my_nav: [
    {
      name: 'Home',
      icon_name: 'Home',
      href: '/'
    },
    {
      name: 'My Leaves',
      icon_name: 'FileText',
      href: '/my-leaves'
    },
    {
      name: 'My Daily Time Record',
      icon_name: 'Clock',
      href: '/my-daily-time-record'
    },
    {
      name: 'My Overtime',
      href: '/my-overtime'
    }
  ] as ISidebarLink[],
  management: [
    {
      name: 'Schedule Management',
      icon_name: 'Sunrise',
      href: '/schedule-management'
    },
    {
      name: 'Employee Management',
      icon_name: 'Users',
      href: '/employee-management'
    },
    {
      name: 'Leave Management',
      icon_name: 'FileText',
      href: '/leave-management'
    },
    {
      name: 'DTR Management',
      icon_name: 'Clock',
      href: '/dtr-management'
    },
    {
      name: 'Overtime Management',
      icon_name: 'Layers',
      href: '/overtime-management'
    }
  ] as ISidebarLink[]
}
