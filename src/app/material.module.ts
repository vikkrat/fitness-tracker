import { NgModule } from '@angular/core';

import { MatButtonModule,
         MatIconModule,
         MatFormFieldModule,
         MatInputModule,
         MatDatepickerModule,
         MatNativeDateModule,
         MatCheckboxModule,
         MatSidenavModule,
         MatToolbarModule,
         MatListModule,
         MatTabsModule,
         MatCardModule,
         MatSelectModule,
         MatProgressSpinnerModule,
         MatDialogModule,
         MatTableModule,
         MatSortModule,
         MatPaginatorModule,
         MatSnackBarModule
    } from '@angular/material';

const MaterialComponents = [
         MatButtonModule,
         MatIconModule,
         MatFormFieldModule,
         MatInputModule,
         MatDatepickerModule,
         MatNativeDateModule,
         MatCheckboxModule,
         MatSidenavModule,
         MatToolbarModule,
         MatListModule,
         MatTabsModule,
         MatCardModule,
         MatSelectModule,
         MatProgressSpinnerModule,
         MatDialogModule,
         MatTableModule,
         MatSortModule,
         MatPaginatorModule,
         MatSnackBarModule
    ];

@NgModule ({
    imports: [MaterialComponents],
    exports: [MaterialComponents]
})

export class MaterialModule { }
