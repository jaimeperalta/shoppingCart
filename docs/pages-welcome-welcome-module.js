(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-welcome-welcome-module"],{

/***/ "+j1i":
/*!****************************************************!*\
  !*** ./src/app/pages/welcome/welcome.component.ts ***!
  \****************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/products.service */ "S3Px");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/product-list/product-list.component */ "a6FK");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/image */ "6ekq");

















function WelcomeComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("nzSrc", ctx_r0.imageSelect);
} }
class WelcomeComponent {
    constructor(authService, fb, message, productService) {
        this.authService = authService;
        this.fb = fb;
        this.message = message;
        this.productService = productService;
        this.isLoadingOne = false;
        this.isLoadingTwo = false;
        this.isVisible = false;
        this.isOkLoading = false;
        this.imageSelect = "";
    }
    ngOnInit() {
        this.validateForm = this.fb.group({
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            sku: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            description: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    }
    showModal() {
        this.isVisible = true;
    }
    handleCancel() {
        this.isVisible = false;
    }
    submitForm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("algo");
            if (this.validateForm.status == "VALID") {
                if (this.imageSelect == '') {
                    this.message.error("Debes subir una imagen");
                }
                else {
                    //guardar:
                    console.log(this.validateForm);
                    this.isOkLoading = true;
                    let newProudct = yield this.productService.createProduct(Object.assign(Object.assign({}, this.validateForm.value), { image: this.imageSelect }));
                    if (newProudct.status == "success")
                        this.message.success("Producto creado correctamente"), this.isVisible = false;
                    else
                        this.message.error("Ocurrio un error al crear tu producto, intenta mas tarde");
                    this.isOkLoading = false;
                }
            }
            else {
                for (const i in this.validateForm.controls) {
                    this.validateForm.controls[i].markAsDirty();
                    this.validateForm.controls[i].updateValueAndValidity();
                }
            }
        });
    }
    login() {
        this.authService.login();
    }
    signup() {
        this.authService.signup();
    }
    logout() {
        this.authService.logout().then((res) => {
            console.log(res);
        });
    }
    getImage(event) {
        console.log(event);
        const file = event.target.files[0];
        console.log(file);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            this.imageSelect = reader.result;
        };
    }
}
WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"])); };
WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: WelcomeComponent, selectors: [["app-welcome"]], decls: 35, vars: 10, consts: [["nz-row", "", 1, "productList"], ["nz-col", "", "nzSpan", "24"], ["nz-button", "", "nzType", "primary", 3, "click"], ["nzTitle", "Nuevo Producto", "nzClassName", "modalCreate", 3, "nzVisible", "nzOkLoading", "nzVisibleChange", "nzOnCancel", "nzOnOk"], ["nz-form", "", 3, "formGroup"], ["nzRequired", "", "nzFor", "name", 3, "nzSpan"], ["nzErrorTip", "Completa el nombre del producto!", 3, "nzSpan"], ["id", "note", "type", "text", "nz-input", "", "formControlName", "name"], ["nzRequired", "", "nzFor", "sku", 3, "nzSpan"], ["nzErrorTip", "Completa el SKU!", 3, "nzSpan"], ["id", "note", "type", "text", "nz-input", "", "formControlName", "sku"], ["nzRequired", "", "nzFor", "description", 3, "nzSpan"], ["nzErrorTip", "Agrega una description para tu producto!", 3, "nzSpan"], ["id", "note", "rows", "5", "type", "text", "nz-input", "", "formControlName", "description"], ["nz-row", "", 1, "uploadImage"], ["for", "myfile"], ["type", "file", "id", "myfile", "name", "myfile", 3, "change"], ["nz-col", "", "nzSpan", "24", "class", "imgPreview", 4, "ngIf"], ["nz-col", "", "nzSpan", "24", 1, "imgPreview"], ["nz-image", "", "width", "200px", "height", "200px", "alt", "", 3, "nzSrc"]], template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WelcomeComponent_Template_button_click_2_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WelcomeComponent_Template_button_click_4_listener() { return ctx.signup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Signup");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WelcomeComponent_Template_button_click_6_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WelcomeComponent_Template_button_click_8_listener() { return ctx.showModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Show Modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "app-product-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "nz-modal", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzVisibleChange", function WelcomeComponent_Template_nz_modal_nzVisibleChange_12_listener($event) { return ctx.isVisible = $event; })("nzOnCancel", function WelcomeComponent_Template_nz_modal_nzOnCancel_12_listener() { return ctx.handleCancel(); })("nzOnOk", function WelcomeComponent_Template_nz_modal_nzOnOk_12_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "nz-form-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "nz-form-control", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "nz-form-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "SKU");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "nz-form-control", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "nz-form-label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Descripcion");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "nz-form-control", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Subir imagen:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function WelcomeComponent_Template_input_change_33_listener($event) { return ctx.getImage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, WelcomeComponent_div_34_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzVisible", ctx.isVisible)("nzOkLoading", ctx.isOkLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.imageSelect != "");
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzColDirective"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["ɵNzTransitionPatchDirective"], _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_10__["ProductListComponent"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_11__["NzModalComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_12__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_12__["NzFormItemComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_12__["NzFormLabelComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_12__["NzFormControlComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_15__["NzImageDirective"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n\n[_nghost-%COMP%]     .upload-list-inline .ant-upload-list-item {\n  float: left;\n  width: 200px;\n  margin-right: 8px;\n}\n\n[_nghost-%COMP%]     .upload-list-inline [class*=-upload-list-rtl] .ant-upload-list-item {\n  float: right;\n}\n\n[_nghost-%COMP%]     .upload-list-inline .ant-upload-animate-enter {\n  animation-name: uploadAnimateInlineIn;\n}\n\n[_nghost-%COMP%]     .upload-list-inline .ant-upload-animate-leave {\n  animation-name: uploadAnimateInlineOut;\n}\n\n.imgPreview[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3dlbGNvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBRUY7O0FBQUE7RUFDRSxZQUFBO0FBR0Y7O0FBREE7RUFDRSxxQ0FBQTtBQUlGOztBQUZBO0VBQ0Usc0NBQUE7QUFLRjs7QUFGQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQUtGIiwiZmlsZSI6IndlbGNvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVwbG9hZC1saXN0LWlubGluZSAuYW50LXVwbG9hZC1saXN0LWl0ZW0ge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cbjpob3N0IDo6bmctZGVlcCAudXBsb2FkLWxpc3QtaW5saW5lIFtjbGFzcyo9Jy11cGxvYWQtbGlzdC1ydGwnXSAuYW50LXVwbG9hZC1saXN0LWl0ZW0ge1xuICBmbG9hdDogcmlnaHQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVwbG9hZC1saXN0LWlubGluZSAuYW50LXVwbG9hZC1hbmltYXRlLWVudGVyIHtcbiAgYW5pbWF0aW9uLW5hbWU6IHVwbG9hZEFuaW1hdGVJbmxpbmVJbjtcbn1cbjpob3N0IDo6bmctZGVlcCAudXBsb2FkLWxpc3QtaW5saW5lIC5hbnQtdXBsb2FkLWFuaW1hdGUtbGVhdmUge1xuICBhbmltYXRpb24tbmFtZTogdXBsb2FkQW5pbWF0ZUlubGluZU91dDtcbn1cblxuLmltZ1ByZXZpZXd7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweDtcbn0iXX0= */"] });


/***/ }),

/***/ "S3Px":
/*!**********************************************!*\
  !*** ./src/app/services/products.service.ts ***!
  \**********************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "JZFu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "lGQG");




class ProductsService {
    constructor(authService) {
        this.authService = authService;
        this.product = [];
    }
    createProduct(product) {
        console.log(product);
        return new Promise((resolve) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let upload = yield this.uploadImage(product.image);
            if (upload.status == "success") {
                let user = this.authService.getUser();
                let insert = yield this.insertProduct(product, upload.id, upload.url, user.uid);
                resolve({ status: insert.status });
            }
            else
                resolve({ status: upload.status });
        }));
    }
    insertProduct(product, id, url, uid) {
        product.image = url;
        return new Promise((resolve) => {
            firebase__WEBPACK_IMPORTED_MODULE_1__["default"].firestore().collection("products").doc(id).set(Object.assign(Object.assign({}, product), { uid }))
                .then(() => {
                resolve({ status: "success" });
            })
                .catch((e) => {
                console.log(e);
                resolve({ status: "fail" });
            });
        });
    }
    uploadImage(image) {
        return new Promise((resolve) => {
            let id = firebase__WEBPACK_IMPORTED_MODULE_1__["default"].firestore().collection("products").doc().id;
            console.log(id);
            let storageRef = firebase__WEBPACK_IMPORTED_MODULE_1__["default"].storage().ref(`images/products/${id}`);
            storageRef.putString(image, 'data_url')
                .then((snapshot) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log('Uploaded a data_url string! ');
                let url = yield storageRef.getDownloadURL();
                console.log("la url ", url);
                resolve({ status: "success", id, url });
            }))
                .catch((e) => {
                resolve({ status: "fail", id: '' });
            });
        });
    }
    getProducts() {
        return new Promise((resolve) => {
            firebase__WEBPACK_IMPORTED_MODULE_1__["default"].firestore().collection("products")
                .get()
                .then((res) => {
                console.log(res);
                if (res.empty)
                    resolve([]);
                else {
                    let products = res.docs.map((doc) => {
                        return Object.assign(Object.assign({}, doc.data()), { key: doc.id });
                    });
                    resolve(products);
                }
            })
                .catch((e) => {
                console.log(e);
                resolve([]);
            });
        });
    }
}
ProductsService.ɵfac = function ProductsService_Factory(t) { return new (t || ProductsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
ProductsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ProductsService, factory: ProductsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "T2Lb":
/*!*********************************************************!*\
  !*** ./src/app/pages/welcome/welcome-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: WelcomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeRoutingModule", function() { return WelcomeRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _welcome_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome.component */ "+j1i");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _welcome_component__WEBPACK_IMPORTED_MODULE_1__["WelcomeComponent"] },
];
class WelcomeRoutingModule {
}
WelcomeRoutingModule.ɵfac = function WelcomeRoutingModule_Factory(t) { return new (t || WelcomeRoutingModule)(); };
WelcomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: WelcomeRoutingModule });
WelcomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](WelcomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "TtBp":
/*!*************************************************!*\
  !*** ./src/app/pages/welcome/welcome.module.ts ***!
  \*************************************************/
/*! exports provided: WelcomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeModule", function() { return WelcomeModule; });
/* harmony import */ var src_app_zorro_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/zorro.module */ "72+5");
/* harmony import */ var _welcome_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome-routing.module */ "T2Lb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome.component */ "+j1i");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class WelcomeModule {
}
WelcomeModule.ɵfac = function WelcomeModule_Factory(t) { return new (t || WelcomeModule)(); };
WelcomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: WelcomeModule });
WelcomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _welcome_routing_module__WEBPACK_IMPORTED_MODULE_1__["WelcomeRoutingModule"], src_app_zorro_module__WEBPACK_IMPORTED_MODULE_0__["ZorroModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](WelcomeModule, { declarations: [_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _welcome_routing_module__WEBPACK_IMPORTED_MODULE_1__["WelcomeRoutingModule"], src_app_zorro_module__WEBPACK_IMPORTED_MODULE_0__["ZorroModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]], exports: [_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"]] }); })();


/***/ }),

/***/ "a6FK":
/*!*******************************************************************!*\
  !*** ./src/app/components/product-list/product-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/products.service */ "S3Px");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cart.service */ "c14U");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/image */ "6ekq");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");














function ProductListComponent_div_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 18);
} if (rf & 2) {
    const product_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", product_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", product_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ProductListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductListComponent_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const product_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.showModal(product_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "nz-card-meta", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProductListComponent_div_1_ng_template_3_Template, 1, 2, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzCover", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("nzTitle", product_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("nzDescription", product_r1.description);
} }
class ProductListComponent {
    constructor(productsService, cartService, message) {
        this.productsService = productsService;
        this.cartService = cartService;
        this.message = message;
        this.products = [];
        this.isVisible = false;
        this.productState = {
            name: "",
            image: "",
            description: "",
            sku: "",
            key: ""
        };
        this.productDetails = this.productState;
    }
    ngOnInit() {
        this.getProducts();
    }
    getProducts() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.products = yield this.productsService.getProducts();
            console.log(this.products);
        });
    }
    add() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let addCart = yield this.cartService.addToCart(this.productDetails);
            console.log("agregar ", addCart);
            if (addCart.status == "success") {
                this.message.success("Producto agregado al carrito");
                this.isVisible = false;
                this.productDetails = this.productState;
            }
            else if (addCart.status == "noUser") {
                this.message.error("Inicia sesión para agregar el producto");
            }
            else {
                this.message.warning("Algo salido mal al agregar el producto, intenta más tarde");
            }
        });
    }
    showModal(product) {
        this.productDetails = product;
        this.isVisible = true;
    }
    handleCancel() {
        this.isVisible = false;
    }
}
ProductListComponent.ɵfac = function ProductListComponent_Factory(t) { return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"])); };
ProductListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProductListComponent, selectors: [["app-product-list"]], decls: 20, vars: 5, consts: [["nz-row", "", 1, "productList"], ["nz-col", "", "nzSpan", "6", 3, "click", 4, "ngFor", "ngForOf"], ["nzClassName", "modalProductDetails", 3, "nzVisible", "nzVisibleChange", "nzOnCancel"], ["nz-row", ""], ["nz-col", "", "nzSpan", "12"], ["nz-row", "", 1, "contentLeft"], ["nz-col", "", "nzSpan", "24", 1, "contentTitle"], ["nz-col", "", "nzSpan", "24", 1, "contentImg"], ["nz-image", "", "alt", "", 3, "nzSrc"], ["nz-row", "", 1, "contentRigth"], ["nz-col", "", "nzSpan", "24", 1, "contentDescription"], ["nz-col", "", "nzSpan", "24", 1, "contentButtons"], ["nz-button", "", "nzType", "dashed", "nzSize", "large", "nzShape", "round", 3, "click"], ["nz-icon", "", "nzType", "shopping-cart", "nzTheme", "outline"], ["nz-col", "", "nzSpan", "6", 3, "click"], ["nzHoverable", "", 2, "width", "240px", 3, "nzCover"], [3, "nzTitle", "nzDescription"], ["coverTemplate", ""], [1, "imgProduct", 3, "alt", "src"]], template: function ProductListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProductListComponent_div_1_Template, 5, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nz-modal", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzVisibleChange", function ProductListComponent_Template_nz_modal_nzVisibleChange_2_listener($event) { return ctx.isVisible = $event; })("nzOnCancel", function ProductListComponent_Template_nz_modal_nzOnCancel_2_listener() { return ctx.handleCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductListComponent_Template_button_click_17_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Agregar al carrito");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzVisible", ctx.isVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.productDetails.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("nzSrc", ctx.productDetails.image);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.productDetails.description);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__["NzRowDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_7__["NzModalComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__["NzColDirective"], ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_8__["NzImageDirective"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__["NzIconDirective"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_13__["NzCardComponent"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_13__["NzCardMetaComponent"]], styles: [".imgProduct[_ngcontent-%COMP%] {\n  height: 200px;\n  object-fit: cover;\n}\n\n.contentLeft[_ngcontent-%COMP%]   .contentTitle[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.contentLeft[_ngcontent-%COMP%]   .contentImg[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.contentLeft[_ngcontent-%COMP%]   .contentImg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 300px;\n  object-fit: contain;\n}\n\n.contentRigth[_ngcontent-%COMP%]   .contentDescription[_ngcontent-%COMP%] {\n  text-align: left;\n  font-size: 14px;\n  max-height: 300px;\n  overflow-y: scroll;\n  margin: 25px 15px 15px 15px;\n  white-space: break-spaces;\n}\n\n.contentButtons[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.contentButtons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #4bea4b;\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUlJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFEUjs7QUFHSTtFQUNJLGtCQUFBO0FBRFI7O0FBRVE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FBQVo7O0FBTUk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtBQUhSOztBQU9BO0VBQ0ksa0JBQUE7QUFKSjs7QUFLSTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7QUFIUiIsImZpbGUiOiJwcm9kdWN0LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nUHJvZHVjdHtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG5cbi5jb250ZW50TGVmdHtcbiAgICAuY29udGVudFRpdGxle1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIC5jb250ZW50SW1ne1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNvbnRlbnRSaWd0aHtcbiAgICAuY29udGVudERlc2NyaXB0aW9ue1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgIG1hcmdpbjogMjVweCAxNXB4IDE1cHggMTVweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcztcbiAgICB9XG59XG5cbi5jb250ZW50QnV0dG9uc3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYnV0dG9uOmhvdmVye1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNGJlYTRiO1xuICAgICAgICBjb2xvcjogd2hpdGUhaW1wb3J0YW50O1xuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ "c14U":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "JZFu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "lGQG");




class CartService {
    constructor(authService) {
        this.authService = authService;
    }
    addToCart(product) {
        return new Promise((resolve) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let user = this.authService.getUser();
            if (!user)
                resolve({ status: "noUser" });
            let searchActual = yield this.searchActualCart(user.uid);
            if (searchActual.status == "noCart") {
                let newCart = yield this.createCart(user.uid);
                if (newCart.status == "successCreate") {
                    let insert = yield this.insertCart(product.key, newCart.id);
                    resolve({ status: insert.status });
                }
                else {
                    resolve({ status: newCart.status });
                }
            }
            else {
                let insert = yield this.insertCart(product.key, searchActual.id);
                resolve({ status: insert.status });
            }
        }));
    }
    searchActualCart(uid) {
        return new Promise((resolve) => {
            firebase__WEBPACK_IMPORTED_MODULE_1__["default"].firestore()
                .collection('carts')
                .doc(uid)
                .collection("cartsList")
                .get()
                .then((res) => {
                console.log(res);
                if (res.empty)
                    resolve({ status: "noCart" });
                else {
                    let fil = res.docs.filter((doc) => doc.data().status == "pending");
                    console.log(fil);
                    if (fil.length > 0) {
                        resolve({ status: "cartExist", id: fil[0].id });
                    }
                    else {
                        resolve({ status: "noCart" });
                    }
                }
            })
                .catch((e) => {
                resolve({ status: "errorGetCart" });
            });
        });
    }
    createCart(uid) {
        return new Promise((resolve) => {
            let id = firebase__WEBPACK_IMPORTED_MODULE_1__["default"].firestore().collection(`carts/${uid}/carts`).doc().id;
            firebase__WEBPACK_IMPORTED_MODULE_1__["default"].firestore()
                .collection(`carts`)
                .doc(uid)
                .collection("cartsList")
                .doc(id)
                .set({
                id,
                status: "pending"
            })
                .then((res) => {
                resolve({ status: "successCreate", id });
            })
                .catch((e) => {
                resolve({ status: "errorCreate", id });
            });
        });
    }
    insertCart(product_id, cart_id) {
        return new Promise((resolve) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let verify = yield this.verifyProductCartExist(product_id, cart_id);
            if (verify.status == "newData") {
                firebase__WEBPACK_IMPORTED_MODULE_1__["default"].firestore()
                    .collection(`products_carts`)
                    .doc()
                    .set({
                    product_id,
                    cart_id,
                    quantity: 1
                })
                    .then((res) => {
                    resolve({ status: "success" });
                })
                    .catch((e) => {
                    resolve({ status: "failInsertCart" });
                });
            }
            else {
                console.log("actualizando producto del carrito");
                firebase__WEBPACK_IMPORTED_MODULE_1__["default"].firestore()
                    .collection(`products_carts`)
                    .doc(verify.id)
                    .update({
                    quantity: firebase__WEBPACK_IMPORTED_MODULE_1__["default"].firestore.FieldValue.increment(1)
                }).then((res) => {
                    resolve({ status: "success" });
                })
                    .catch((e) => {
                    resolve({ status: "failInsertCart" });
                });
            }
        }));
    }
    verifyProductCartExist(product_id, cart_id) {
        return new Promise((resolve) => {
            firebase__WEBPACK_IMPORTED_MODULE_1__["default"].firestore()
                .collection(`products_carts`)
                .where("cart_id", "==", cart_id)
                .where("product_id", "==", product_id)
                .get()
                .then((res) => {
                if (res.empty)
                    resolve({ status: "newData", id: "" });
                else {
                    let info = res.docs.map((doc) => doc.id);
                    console.log("data  verify", info[0]);
                    resolve({ status: "update", id: info[0] });
                }
            });
        });
    }
}
CartService.ɵfac = function CartService_Factory(t) { return new (t || CartService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
CartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CartService, factory: CartService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-list/product-list.component */ "a6FK");
/* harmony import */ var _zorro_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../zorro.module */ "72+5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class ComponentsModule {
}
ComponentsModule.ɵfac = function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); };
ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _zorro_module__WEBPACK_IMPORTED_MODULE_2__["ZorroModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__["ProductListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _zorro_module__WEBPACK_IMPORTED_MODULE_2__["ZorroModule"]], exports: [_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__["ProductListComponent"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-welcome-welcome-module.js.map