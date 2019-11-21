// import { filter } from 'rxjs/operators';

// import { StoreService } from 'le5le-store';
// import { environment } from 'src/environments/environment';

// // @Component({
// //   selector: 'app-root',
// //   templateUrl: './app.component.html',
// //   styleUrls: ['./app.component.scss']
// // })
// export class AppComponent{
//   user: any;
//   urls = environment.urls;
//   file = {
//     id: '',
//     fileId: '',
//     data: { nodes: [], lines: [] },
//     name: '',
//     desc: '',
//     image: '',
//     shared: false
//   };
//   filename = '';
//   list = {
//     recently: []
//   };
//   lineName = 'curve';
//   fromArrowType = '';
//   toArrowType = 'triangleSolid';

//   lineNames = ['curve', 'polyline', 'line'];
//   arrowTypes = [
//     '',
//     'triangleSolid',
//     'triangle',
//     'diamondSolid',
//     'diamond',
//     'circleSolid',
//     'circle',
//     'line',
//     'lineUp',
//     'lineDown'
//   ];

//   menuClicked = false;
//   showFigure = false;
//   editFilename = false;
//   blank = false;
//   editMode = false;
//   locked = 0;
//   scale = 100;

//   disableStartDlg = false;

//   showLicense = false;
//   showHelp = false;
//   showAbout = false;
//   constructor(private storeService: StoreService) {}//, private router: Router, private activateRoute: ActivatedRoute

//   ngOnInit() {
//     this.disableStartDlg = localStorage.getItem('disable.startDlg') === 'true';
//     this.blank = location.pathname === '/' && !location.search && !this.disableStartDlg;
//     this.user = this.storeService.get('user');
//     this.storeService.get$('user').subscribe((user: any) => {
//       this.user = user;
//       this.getRecently();
//     });

//     this.storeService.get$('file').subscribe((file: any) => {
//       this.locked = 0;
//       this.file = file;
//       this.filename = file.name;
//       this.editFilename = false;
//     });

//     this.storeService.get$('lineName').subscribe((lineName: string) => {
//       if (lineName) {
//         this.lineName = lineName;
//       }
//     });

//     this.storeService.get$('fromArrowType').subscribe((fromArrowType: string) => {
//       this.fromArrowType = fromArrowType || '';
//     });

//     this.storeService.get$('toArrowType').subscribe((toArrowType: string) => {
//       if (toArrowType !== undefined) {
//         this.toArrowType = toArrowType || '';
//       }
//     });

//     this.storeService.get$('scale').subscribe((scale: number) => {
//       this.scale = scale * 100;
//     });

//     this.storeService.get$('locked').subscribe((locked: number) => {
//       this.locked = locked;
//     });

//     this.storeService.get$('recently').subscribe((item: any) => {
//       for (let i = 0; i < this.list.recently.length; ++i) {
//         if (this.list.recently[i].id === item.id || i > 18) {
//           this.list.recently.splice(i, 1);
//         }
//       }

//       this.list.recently.unshift(item);
//       if (this.user) {
//         localStorage.setItem('recently_' + this.user.id, JSON.stringify(this.list.recently));
//       }
//     });

//     // this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
//     //   if ((event as NavigationEnd).url.indexOf('/workspace') === 0) {
//     //     this.editMode = true;
//     //   } else {
//     //     this.editMode = false;
//     //     this.file = {
//     //       id: '',
//     //       fileId: '',
//     //       data: { nodes: [], lines: [] },
//     //       name: '',
//     //       desc: '',
//     //       image: '',
//     //       shared: false
//     //     };
//     //   }
//     // });

//     this.getRecently();
//   }

//   getRecently() {
//     if (!this.user) {
//       return;
//     }

//     try {
//       this.list.recently = JSON.parse(localStorage.getItem('recently_' + this.user.id));
//     } catch (e) {}

//     if (!this.list.recently) {
//       this.list.recently = [];
//     }
//   }

//   onMenu(menu: string, data?: any) {
//     if (!this.editMode && menu !== 'new' && menu !== 'open') {
//       return;
//     }

//     // if (menu === 'new' || menu === 'open') {
//     //   const queryParams: any = {};
//     //   if (data) {
//     //     queryParams.id = this.activateRoute.snapshot.queryParamMap.get('id');
//     //     queryParams.fileId = this.activateRoute.snapshot.queryParamMap.get('fileId');
//     //   }
//     //   this.router.navigate(['/workspace'], {
//     //     queryParams
//     //   });
//     // }

//     setTimeout(
//       () => {
//         this.storeService.set('clickMenu', {
//           event: menu,
//           data
//         });
//       },
//       this.editMode ? 0 : 300
//     );

//     this.blank = false;
//   }

//   onClickMenu(event: MouseEvent) {
//     if ((event.target as HTMLElement).nodeName === 'A') {
//       let node = (event.target as HTMLElement).parentElement;
//       let isDropdown = false;
//       let disabled = false;
//       while (node) {
//         if (node.className.indexOf('dropdown') > -1) {
//           isDropdown = true;
//         }
//         if (node.className.indexOf('disabled') > -1) {
//           disabled = true;
//           break;
//         }
//         node = node.parentElement;
//       }

//       if (disabled) {
//         return;
//       }

//       if (isDropdown) {
//         this.menuClicked = true;
//         setTimeout(() => {
//           this.menuClicked = false;
//         }, 500);
//       }
//     }
//   }

//   onLeaveFigure() {
//     setTimeout(() => {
//       this.showFigure = false;
//     }, 800);
//   }

//   onEditFile(input: HTMLElement) {
//     this.editFilename = true;
//     setTimeout(() => {
//       input.focus();
//     });
//   }

//   async onSubmit(invalid: boolean) {
//     if (invalid) {
//       return;
//     }

//     this.storeService.set('clickMenu', {
//       event: 'filename',
//       data: this.filename
//     });
//   }

//   onClick() {
//     if (this.editFilename) {
//       this.onSubmit(!this.filename);
//     }
//     this.editFilename = false;
//   }

//   // onHome() {
//   //   this.router.navigateByUrl('/');
//   // }

//   onSelLine(line: string) {
//     this.lineName = line;
//     this.menuClicked = true;
//     setTimeout(() => {
//       this.menuClicked = false;
//     }, 500);

//     this.storeService.set('clickMenu', {
//       event: 'lineName',
//       data: this.lineName
//     });
//   }

//   onSelFromArrow(arrow: string) {
//     this.fromArrowType = arrow;
//     this.menuClicked = true;
//     setTimeout(() => {
//       this.menuClicked = false;
//     }, 500);

//     this.storeService.set('clickMenu', {
//       event: 'fromArrowType',
//       data: this.fromArrowType
//     });
//   }

//   onSelToArrow(arrow: string) {
//     this.toArrowType = arrow;
//     this.menuClicked = true;
//     setTimeout(() => {
//       this.menuClicked = false;
//     }, 500);

//     this.storeService.set('clickMenu', {
//       event: 'toArrowType',
//       data: this.toArrowType
//     });
//   }

//   onChangeDisableStart() {
//     localStorage.setItem('disable.startDlg', this.disableStartDlg + '');
//   }

//   ngOnDestroy() {}
// }
