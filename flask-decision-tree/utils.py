def get_tree_data():
    tree_data = [
      {
        'key': '0',
        'label': 'Documents',
        'iconl': 'pi pi-fw pi-inbox',
        'children': [
          {
            'key': '0-0',
            'label': 'Work',
            'data': 'Work Folder',
            'iconl': 'pi pi-fw pi-cog',
            'children': [
              {
                'key': '0-0-0',
                'label': 'Expenses.doc',
                'iconl': 'pi pi-fw pi-file',
                'data': 'Expenses Document',
              },
              {
                'key': '0-0-1',
                'label': 'Resume.doc',
                'iconl': 'pi pi-fw pi-file',
                'data': 'Resume Document',
              },
            ],
          },
          {
            'key': '0-1',
            'label': 'Home',
            'data': 'Home Folder',
            'iconl': 'pi pi-fw pi-home',
            'children': [
              {
                'key': '0-1-0',
                'label': 'Invoices.txt',
                'iconl': 'pi pi-fw pi-file',
                'data': 'Invoices for this month',
                'children': [
                  {
                    'key': '0-1-0',
                    'label': 'Invoices.txt',
                    'iconl': 'pi pi-fw pi-file',
                    'data': 'Invoices for this month',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        'key': '1',
        'label': 'Events',
        'data': 'Events Folder',
        'iconl': 'pi pi-fw pi-calendar',
        'children': [
          {
            'key': '1-0',
            'label': 'Meeting',
            'iconl': 'pi pi-fw pi-calendar-plus',
            'data': 'Meeting',
          },
          {
            'key': '1-1',
            'label': 'Product Launch',
            'iconl': 'pi pi-fw pi-calendar-plus',
            'data': 'Product Launch',
          },
          {
            'key': '1-2',
            'label': 'Report Review',
            'iconl': 'pi pi-fw pi-calendar-plus',
            'data': 'Report Review',
          },
        ],
      },
      {
        'key': '2',
        'label': 'Movies',
        'data': 'Movies Folder',
        'iconl': 'pi pi-fw pi-star-fill',
        'children': [
          {
            'key': '2-0',
            'iconl': 'pi pi-fw pi-star-fill',
            'label': 'Al Pacino',
            'data': 'Pacino Movies',
            'children': [
              {
                'key': '2-0-0',
                'label': 'Scarface',
                'iconl': 'pi pi-fw pi-video',
                'data': 'Scarface Movie',
              },
              {
                'key': '2-0-1',
                'label': 'Serpico',
                'iconl': 'pi pi-fw pi-video',
                'data': 'Serpico Movie',
              },
            ],
          },
          {
            'key': '2-1',
            'label': 'Robert De Niro',
            'iconl': 'pi pi-fw pi-star-fill',
            'data': 'De Niro Movies',
            'children': [
              {
                'key': '2-1-0',
                'label': 'Goodfellas',
                'iconl': 'pi pi-fw pi-video',
                'data': 'Goodfellas Movie',
              },
              {
                'key': '2-1-1',
                'label': 'Untouchables',
                'iconl': 'pi pi-fw pi-video',
                'data': 'Untouchables Movie',
              },
            ],
          },
        ],
      },
    ]
    return tree_data
