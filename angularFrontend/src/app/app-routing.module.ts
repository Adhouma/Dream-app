import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { DreamListComponent } from './dream-list/dream-list.component';
import { DreamAddComponent } from './dream-add/dream-add.component';
import { DreamUpdateComponent } from './dream-update/dream-update.component';

// Routes
const routes: Routes = [
    { path: "", redirectTo: "/dream-list", pathMatch: "full" },
    { path: "dream-list", component: DreamListComponent },
    { path: "dream-add", component: DreamAddComponent },
    { path: "dream-update/:id", component: DreamUpdateComponent},
    { path: "**", redirectTo: "/"}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouting {

}