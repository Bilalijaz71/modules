import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { shoppingRoutingModule } from "./shopping.router";
import { ShoppingListComponent } from "./shopping-list.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations:[
        ShoppingListComponent,
    ShoppingEditComponent
    ],
    imports: [RouterModule,
        shoppingRoutingModule,
        FormsModule,SharedModule]
})
export class ShoppinglistModules {}