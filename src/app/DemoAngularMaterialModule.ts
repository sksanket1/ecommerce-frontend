import { NgModule } from '@angular/core';

// Form Controls
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSliderModule } from '@angular/material/slider';

// Navigation
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';

// Layout & Buttons
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

// Data Display
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';

// Feedback
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';

// Dialogs & Popups
import { MatDialogModule } from '@angular/material/dialog';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

// Stepper
import { MatStepperModule } from '@angular/material/stepper';

// Expansion Panel
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  exports: [
    // Form Controls
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSliderModule,

    // Navigation
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,

    // Layout & Buttons
    MatButtonModule,
    MatIconModule,
    MatDividerModule,

    // Data Display
    MatCardModule,
    MatListModule,
    MatTableModule,
    MatTabsModule,
    MatChipsModule,

    // Feedback
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatTooltipModule,

    // Dialogs & Popups
    MatDialogModule,
    MatBottomSheetModule,

    // Stepper
    MatStepperModule,

    // Expansion
    MatExpansionModule
  ]
})
export class DemoAngularMaterialModule {}