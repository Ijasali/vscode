import { FileExplorerViewModel  } from '../models/directory.model';

export function  fakeFileExplorer(): FileExplorerViewModel[] {
    return [
        {
            id : 1,
            name: 'Open Editors',
            isTopLevel: true,
            children: [
              {id: 3, name: 'archieved.html', content: 'archieve conent'},
              {id: 4, name: 'Brusselssprouts.html', content: 'Brusselssprouts conent'},
            ]
        },
        {
            id: 5,
            name: 'VSCODE',
            isTopLevel: true,
            children: [
                {
                  id: 6,
                  name: 'Directory',
                  children: [
                    {id: 7, name: 'index.html', content: 'index conent'},
                    {id: 8, name: 'mainmenu.html', content: 'mainmenu conent'},
                  ]
                }, {
                  id: 9,
                  name: 'src',
                  children: [
                    {id: 10, name: 'app-component.ts', content: 'app-component conent'},
                    {id: 11, name: 'ap-component.html', content:  'app-component.html content'},
                  ]
                },
            ]

        },
        {
          id: 12,
          name: 'OUTLINE',
          isTopLevel: true,
          children: [
              {
                id: 13,
                name: 'dummy',
                children: [
                  {id: 14, name: 'dummy.html', content: 'dummy conent'},
                  {id: 15, name: 'testdata.html', content: 'testdata conent'},
                ]
              }, {
                id: 16,
                name: 'test',
                children: [
                  {id: 17, name: 'example.ts', content: 'example conent'},
                  {id: 18, name: 'module.ts', content:  'module conent'},
                ]
              },
          ]

      },


    ];
  }
