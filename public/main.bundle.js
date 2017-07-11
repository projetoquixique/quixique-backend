webpackJsonp([1,4],{

/***/ 143:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 143;


/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(164);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(235),
        styles: [__webpack_require__(219)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_routing__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_text_mask__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_header_component__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__form_cadastro_form_cadastro_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__page_start_page_start_component__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__page_start_carrossel_carrossel_component__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__page_start_form_cadastro_start_form_cadastro_start_component__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__page_start_navbar_start_navbar_start_component__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__page_start_categories_categories_component__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__page_start_footer_footer_component__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__card_pedido_grande_card_pedido_grande_component__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__tela_principal_artesao_tela_principal_artesao_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__card_pedido_pequeno_card_pedido_pequeno_component__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__mensagem_erro_input_mensagem_erro_input_component__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__termos_confirmacao_termos_confirmacao_component__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_request_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_user_data_handler_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_authentication_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__page_start_categories_category_thumbnail_category_thumbnail_component__ = __webpack_require__(159);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_9__form_cadastro_form_cadastro_component__["a" /* FormCadastroComponent */],
            __WEBPACK_IMPORTED_MODULE_16__card_pedido_grande_card_pedido_grande_component__["a" /* CardPedidoGrandeComponent */],
            __WEBPACK_IMPORTED_MODULE_17__tela_principal_artesao_tela_principal_artesao_component__["a" /* TelaPrincipalArtesaoComponent */],
            __WEBPACK_IMPORTED_MODULE_18__card_pedido_pequeno_card_pedido_pequeno_component__["a" /* CardPedidoPequenoComponent */],
            __WEBPACK_IMPORTED_MODULE_19__mensagem_erro_input_mensagem_erro_input_component__["a" /* MensagemErroInputComponent */],
            __WEBPACK_IMPORTED_MODULE_20__termos_confirmacao_termos_confirmacao_component__["a" /* TermosConfirmacaoComponent */],
            __WEBPACK_IMPORTED_MODULE_10__page_start_page_start_component__["a" /* PageStartComponent */],
            __WEBPACK_IMPORTED_MODULE_11__page_start_carrossel_carrossel_component__["a" /* CarrosselComponent */],
            __WEBPACK_IMPORTED_MODULE_13__page_start_navbar_start_navbar_start_component__["a" /* NavbarStartComponent */],
            __WEBPACK_IMPORTED_MODULE_14__page_start_categories_categories_component__["a" /* CategoriesComponent */],
            __WEBPACK_IMPORTED_MODULE_15__page_start_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__page_start_form_cadastro_start_form_cadastro_start_component__["a" /* FormCadastroStartComponent */],
            __WEBPACK_IMPORTED_MODULE_24__page_start_categories_category_thumbnail_category_thumbnail_component__["a" /* CategoryThumbnailComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_0__app_routing__["a" /* Routing */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_text_mask__["TextMaskModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_21__services_request_service__["a" /* RequestService */],
            __WEBPACK_IMPORTED_MODULE_22__services_user_data_handler_service__["a" /* UserDataHandlerService */],
            __WEBPACK_IMPORTED_MODULE_23__services_authentication_service__["a" /* AuthenticationService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form_cadastro_form_cadastro_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tela_principal_artesao_tela_principal_artesao_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_start_page_start_component__ = __webpack_require__(90);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });




var APP_ROUTES = [
    { path: "", redirectTo: "/inicio", pathMatch: "full" },
    { path: "inicio", component: __WEBPACK_IMPORTED_MODULE_3__page_start_page_start_component__["a" /* PageStartComponent */] },
    { path: "cadastro", component: __WEBPACK_IMPORTED_MODULE_1__form_cadastro_form_cadastro_component__["a" /* FormCadastroComponent */] },
    { path: "tela_principal_artesao", component: __WEBPACK_IMPORTED_MODULE_2__tela_principal_artesao_tela_principal_artesao_component__["a" /* TelaPrincipalArtesaoComponent */] },
];
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardPedidoGrandeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardPedidoGrandeComponent = (function () {
    function CardPedidoGrandeComponent() {
    }
    CardPedidoGrandeComponent.prototype.ngOnInit = function () {
    };
    return CardPedidoGrandeComponent;
}());
CardPedidoGrandeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-card-pedido-grande',
        template: __webpack_require__(236),
        styles: [__webpack_require__(220)]
    }),
    __metadata("design:paramtypes", [])
], CardPedidoGrandeComponent);

//# sourceMappingURL=card-pedido-grande.component.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardPedidoPequenoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardPedidoPequenoComponent = (function () {
    function CardPedidoPequenoComponent() {
    }
    CardPedidoPequenoComponent.prototype.ngOnInit = function () {
    };
    return CardPedidoPequenoComponent;
}());
CardPedidoPequenoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-card-pedido-pequeno',
        template: __webpack_require__(237),
        styles: [__webpack_require__(221)]
    }),
    __metadata("design:paramtypes", [])
], CardPedidoPequenoComponent);

//# sourceMappingURL=card-pedido-pequeno.component.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(239),
        styles: [__webpack_require__(223)]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MensagemErroInputComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MensagemErroInputComponent = (function () {
    function MensagemErroInputComponent() {
    }
    MensagemErroInputComponent.prototype.ngOnInit = function () {
    };
    return MensagemErroInputComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MensagemErroInputComponent.prototype, "mensagemDeErro", void 0);
MensagemErroInputComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-mensagem-erro-input',
        template: __webpack_require__(240),
        styles: [__webpack_require__(224)]
    }),
    __metadata("design:paramtypes", [])
], MensagemErroInputComponent);

//# sourceMappingURL=mensagem-erro-input.component.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__(91);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.dadosLogin = { email: { valor: undefined, estado: null, mensagem: "" }, senha: { valor: undefined, estado: null, mensagem: "" } };
    }
    NavbarComponent.prototype.cadastrarUsuario = function () {
        sessionStorage.setItem('tipoUsuario', 'cliente');
    };
    ;
    NavbarComponent.prototype.cadastrarArtesao = function () {
        sessionStorage.setItem('tipoUsuario', 'artesao');
    };
    ;
    NavbarComponent.prototype.verificaEmail = function () {
        if (!(/\S/.test(this.dadosLogin.email.valor)) || this.dadosLogin.email.valor == undefined) {
            this.dadosLogin.email.estado = false;
            this.dadosLogin.email.mensagem = "Insira o email";
        }
        else if (!(/\S+@\S+\.\S+/.test(this.dadosLogin.email.valor))) {
            this.dadosLogin.email.estado = false;
            this.dadosLogin.email.mensagem = "Email inválido";
        }
        else {
            this.dadosLogin.email.estado = true;
        }
        ;
    };
    ;
    NavbarComponent.prototype.verificaSenha = function () {
        if (this.dadosLogin.senha.valor !== undefined) {
            if (!(/\S/.test(this.dadosLogin.senha.valor))) {
                this.dadosLogin.senha.estado = false;
                this.dadosLogin.senha.mensagem = "Insira a senha";
            }
            else if (this.dadosLogin.senha.valor.length < 6) {
                this.dadosLogin.senha.estado = false;
                this.dadosLogin.senha.mensagem = "Insira a senha completa";
            }
            else {
                this.dadosLogin.senha.estado = true;
            }
            ;
        }
        else {
            this.dadosLogin.senha.estado = false;
            this.dadosLogin.senha.mensagem = "Insira a senha";
        }
        ;
    };
    ;
    NavbarComponent.prototype.entrar = function () {
        this.verificaEmail();
        this.verificaSenha();
        if (this.dadosLogin.email.estado && this.dadosLogin.senha.estado) {
            var loginAttempt = this.authService.login(this.dadosLogin.email.valor, this.dadosLogin.senha.valor);
            if (loginAttempt == "notFound") {
                this.dadosLogin.email.estado = false;
                this.dadosLogin.email.mensagem = "E-mail não cadastrado";
            }
            else if (loginAttempt == "wrongPassword") {
                this.dadosLogin.senha.estado = false;
                this.dadosLogin.senha.mensagem = "Senha incorreta";
            }
            else {
                alert(loginAttempt.tipo);
            }
        }
        ;
    };
    ;
    NavbarComponent.prototype.ngOnInit = function () {
        this.authService.getReady();
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(241),
        styles: [__webpack_require__(225)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], NavbarComponent);

var _a, _b;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarrosselComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarrosselComponent = (function () {
    function CarrosselComponent() {
        this.formShow = false;
    }
    // showForm(str){
    //   // alert('chegou isso: ' + str);
    //   if(this.formShow == false){
    //     this.formShow = true;
    //   }
    //   else{
    //     if(str == "" || str == undefined || str != 'close'){
    //       // event.preventDefault();
    //       event.stopPropagation();
    //       return false; 
    //     }
    //     else if(str == 'close'){
    //       this.formShow = false;
    //     }
    //   }
    // }
    CarrosselComponent.prototype.showForm = function () {
        // alert('chegou isso: ' + str);    
        this.formShow = true;
        event.stopPropagation();
        return false;
    };
    CarrosselComponent.prototype.hideForm = function (str) {
        // alert('chegou isso: ' + str);
        if (str == "" || str == undefined || str != 'close') {
            // event.preventDefault();
            event.stopPropagation();
            return false;
        }
        else if (str == 'close') {
            this.formShow = false;
        }
    };
    CarrosselComponent.prototype.ngOnInit = function () {
    };
    return CarrosselComponent;
}());
CarrosselComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-carrossel',
        template: __webpack_require__(242),
        styles: [__webpack_require__(226)]
    }),
    __metadata("design:paramtypes", [])
], CarrosselComponent);

//# sourceMappingURL=carrossel.component.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_page_start_categories_category_thumbnail_category_thumbnail_model__ = __webpack_require__(89);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoriesComponent = (function () {
    function CategoriesComponent() {
        // @Input() categories:Array<Category> = [
        //   new Category("Madeira","Peças muito xiques de madeira para decoração e para o dia a dia","img-01.jpg"),
        //   new Category("Biscuit","Peças muito xiques de biscuit como chaveiros, potes, estatuas e muito mais","img-02.jpg"),
        //   new Category("Bordado","Lindos bordados, xiquíssimos, em panos de prato, colcha de cama, toalha de mesa, entre outros","img-03.jpg"),
        //   new Category("Pedra","Xiquérrimas estatuas de pedra, para decoração de ambientes internos e externos","img-04.jpg"),
        //   new Category("Bijuteria","Bijuterias maravilhosmente xiques, feminina e masculina para deixa-los ainda mais lindos","img-05.jpg"),
        //   new Category("Decoração","Artigos em geral para decoração, porque decorar é XIQUE","img-06.jpg"),
        //   new Category("Couro","Artigos de couro, como bolsas, sintos, carteiras, todos xiques de morrer","img-07.jpg")
        // ];
        this.categories = [
            new __WEBPACK_IMPORTED_MODULE_1_app_page_start_categories_category_thumbnail_category_thumbnail_model__["a" /* Category */]("Madeira", "Encontre aqui as melhores peças esculpidas em madeira para decoração.", "img-01.jpg"),
            new __WEBPACK_IMPORTED_MODULE_1_app_page_start_categories_category_thumbnail_category_thumbnail_model__["a" /* Category */]("Pedra Sabão", "O dom de transformar um simples pedaço de rocha nas mais sinuosas curvas de um corpo.", "img-00.jpg"),
            new __WEBPACK_IMPORTED_MODULE_1_app_page_start_categories_category_thumbnail_category_thumbnail_model__["a" /* Category */]("Barro", "Aqui você encontra os mais diversos artesanatos em barro com características da cultura regional.", "img-00.jpg"),
            new __WEBPACK_IMPORTED_MODULE_1_app_page_start_categories_category_thumbnail_category_thumbnail_model__["a" /* Category */]("Biscuit", "Artesanato em biscuit para casamentos, formaturas, aniversários e decorações em geral.", "img-00.jpg"),
            new __WEBPACK_IMPORTED_MODULE_1_app_page_start_categories_category_thumbnail_category_thumbnail_model__["a" /* Category */]("Cama, mesa e banho", "Temos a maior variedade em conforto e beleza para sua casa.", "img-00.jpg"),
            new __WEBPACK_IMPORTED_MODULE_1_app_page_start_categories_category_thumbnail_category_thumbnail_model__["a" /* Category */]("Religiosos", "Artigos religiosos que dão um toque divino para sua casa", "img-03.jpg"),
            new __WEBPACK_IMPORTED_MODULE_1_app_page_start_categories_category_thumbnail_category_thumbnail_model__["a" /* Category */]("Couro", "Encontre uma grande variedade em peças de couro de alta qualidade.", "img-07.jpg"),
            new __WEBPACK_IMPORTED_MODULE_1_app_page_start_categories_category_thumbnail_category_thumbnail_model__["a" /* Category */]("Decoração", "Diversidade de objetos que dão o toque especial que falta nos ambientes de sua casa.", "img-06.jpg"),
            new __WEBPACK_IMPORTED_MODULE_1_app_page_start_categories_category_thumbnail_category_thumbnail_model__["a" /* Category */]("Pintura", "Veja através dos olhos dos nossos melhores artesãos as belezas que tornarão seus dias mais felizes.", "img-04.jpg"),
            new __WEBPACK_IMPORTED_MODULE_1_app_page_start_categories_category_thumbnail_category_thumbnail_model__["a" /* Category */]("Bijuteria", "Sua oportunidade de ficar ainda mais deslumbrante, valorizando seu charme de forma barata e elegante.", "img-05.jpg"),
            new __WEBPACK_IMPORTED_MODULE_1_app_page_start_categories_category_thumbnail_category_thumbnail_model__["a" /* Category */]("Vestuário", "Do popular ao estilizado, nossos artesãos possuem nas mãos, a capacidade de representar os valores de cada cliente.", "img-00.jpg"),
            new __WEBPACK_IMPORTED_MODULE_1_app_page_start_categories_category_thumbnail_category_thumbnail_model__["a" /* Category */]("Recicláveis", "Recriar é um dom que você verá por aqui. De uma coisa sem valor à um objeto de valor.", "img-00.jpg"),
        ];
    }
    CategoriesComponent.prototype.ngOnInit = function () {
    };
    return CategoriesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CategoriesComponent.prototype, "categories", void 0);
CategoriesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-categories',
        template: __webpack_require__(243),
        styles: [__webpack_require__(227)]
    }),
    __metadata("design:paramtypes", [])
], CategoriesComponent);

//# sourceMappingURL=categories.component.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__category_thumbnail_model__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryThumbnailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoryThumbnailComponent = (function () {
    function CategoryThumbnailComponent() {
    }
    CategoryThumbnailComponent.prototype.ngOnInit = function () {
    };
    return CategoryThumbnailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__category_thumbnail_model__["a" /* Category */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__category_thumbnail_model__["a" /* Category */]) === "function" && _a || Object)
], CategoryThumbnailComponent.prototype, "category", void 0);
CategoryThumbnailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-category-thumbnail',
        template: __webpack_require__(244),
        styles: [__webpack_require__(228)]
    }),
    __metadata("design:paramtypes", [])
], CategoryThumbnailComponent);

var _a;
//# sourceMappingURL=category-thumbnail.component.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(245),
        styles: [__webpack_require__(229)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormCadastroStartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormCadastroStartComponent = (function () {
    function FormCadastroStartComponent() {
        this.closeForm = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    FormCadastroStartComponent.prototype.close = function (str) {
        // alert(str);
        this.closeForm.emit(str);
    };
    FormCadastroStartComponent.prototype.cadastrarUsuario = function (user, data) {
        // alert(user);
        sessionStorage.setItem('tipoUsuario', user);
    };
    ;
    FormCadastroStartComponent.prototype.guardarDados = function (data) {
        if (data) {
            data = JSON.stringify(data);
            sessionStorage.setItem('userData', data);
        }
    };
    FormCadastroStartComponent.prototype.ngOnInit = function () {
    };
    return FormCadastroStartComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], FormCadastroStartComponent.prototype, "closeForm", void 0);
FormCadastroStartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-form-cadastro-start',
        template: __webpack_require__(246),
        styles: [__webpack_require__(230)]
    }),
    __metadata("design:paramtypes", [])
], FormCadastroStartComponent);

//# sourceMappingURL=form-cadastro-start.component.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarStartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarStartComponent = (function () {
    function NavbarStartComponent() {
    }
    NavbarStartComponent.prototype.cadastrarCliente = function () {
        // alert('teste');
        sessionStorage.setItem('tipoUsuario', 'cliente');
    };
    ;
    NavbarStartComponent.prototype.cadastrarArtesao = function () {
        // alert('teste2');
        sessionStorage.setItem('tipoUsuario', 'artesao');
    };
    ;
    NavbarStartComponent.prototype.ngOnInit = function () {
    };
    return NavbarStartComponent;
}());
NavbarStartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar-start',
        template: __webpack_require__(247),
        styles: [__webpack_require__(231)]
    }),
    __metadata("design:paramtypes", [])
], NavbarStartComponent);

//# sourceMappingURL=navbar-start.component.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_request_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_data_handler_service__ = __webpack_require__(60);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermosConfirmacaoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TermosConfirmacaoComponent = (function () {
    function TermosConfirmacaoComponent(requestService, userDataHandler) {
        this.requestService = requestService;
        this.userDataHandler = userDataHandler;
        this.userType = this.userDataHandler.newUserData.tipo;
        this.userMail = this.userDataHandler.newUserData.email;
        this.confirmacaoTermos = null;
        this.cadastroFinalizado = false;
        this.formSubmitted = false;
    }
    TermosConfirmacaoComponent.prototype.confirmaTermos = function () {
        this.confirmacaoTermos = !this.confirmacaoTermos;
    };
    ;
    TermosConfirmacaoComponent.prototype.cadastrar = function () {
        var _this = this;
        this.formSubmitted = true;
        if (this.confirmacaoTermos) {
            this.requestService.post("http://rest.learncode.academy/api/quixique/cadastro", this.userDataHandler.newUserData).subscribe(function (data) { return _this.cadastroFinalizado = true; }, function (error) { return console.log(error); });
        }
        else {
            this.confirmacaoTermos = false;
        }
        ;
    };
    ;
    TermosConfirmacaoComponent.prototype.ngOnInit = function () { };
    ;
    return TermosConfirmacaoComponent;
}());
TermosConfirmacaoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-termos-confirmacao',
        template: __webpack_require__(250),
        styles: [__webpack_require__(234)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_data_handler_service__["a" /* UserDataHandlerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_data_handler_service__["a" /* UserDataHandlerService */]) === "function" && _b || Object])
], TermosConfirmacaoComponent);

var _a, _b;
//# sourceMappingURL=termos-confirmacao.component.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".card{\r\n  background-color: #E5E5E5;\r\n  border-bottom: 4px solid #d6d3d3;\r\n  margin-top:  20px;\r\n  max-height: 154px;\r\n  min-height: 154px;\r\n  box-shadow: 0px 0px 30px #edebeb;\r\n}\r\n.listaHide{\r\n  display: none;\r\n}\r\n.listaShow{\r\n  display: block;\r\n}\r\n.img{\r\n  display: block;\r\n  background-color: #000000;\r\n  width: 150px;\r\n  height: 150px;\r\n  background-image: url('https://s-media-cache-ak0.pinimg.com/736x/0f/82/19/0f8219c0c0b498c6b0a50cf1753a1214.jpg');\r\n  background-size: 150px 150px;\r\n  display: table;\r\n  position: relative;\r\n}\r\n.titulo{\r\n  display: table-row;\r\n  position: absolute;\r\n  bottom: 0px;\r\n  padding: 5px;\r\n}\r\n.titulo h3{\r\n  color: #fff;\r\n}\r\n.degrade{\r\n  width: 150px;\r\n  height: 150px; /* For Safari 5.1 to 6.0 */ /* For Opera 11.1 to 12.0 */ /* For Firefox 3.6 to 15 */\r\n  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)); /* Standard syntax */\r\n}\r\n\r\n.foto-ecomendante{\r\n  display: inline-block;\r\n  float: left;\r\n  margin: 10px;\r\n  margin-left: 0px;\r\n}\r\n.foto-ecomendante img{\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 50%;\r\n}\r\n.classificacao{\r\n  margin-top: -7px;\r\n}\r\n.classificacao li{\r\n  display: inline-block;\r\n}\r\n.tempo-restante{\r\n  margin-top: 10px;\r\n}\r\n.tempo-restante span{\r\n  display: inline-block;\r\n  float: left;\r\n  font-size: 20px;\r\n  margin: 5px;\r\n  margin-top: 0px;\r\n}\r\n.tempo{\r\n  display: inline;\r\n}\r\n.tempo-dias{\r\n  color: red;\r\n  display: inline;\r\n}\r\n.price{\r\n  background-color: #F5F5F5;\r\n  display: block;\r\n  padding: 10px;\r\n}\r\n.unidades{\r\n  color: rgb(3, 104, 113);\r\n  margin-left: 15px;\r\n  margin-top: 5px;\r\n}\r\n.valor-total{\r\n  color: rgb(77, 34, 7);\r\n  font-weight: bold;\r\n  margin-left: 15px;\r\n  margin-top: -5px;\r\n}\r\n.prazo-entrega{\r\n  float: right;\r\n  margin-right: 15px;\r\n  margin-top: -10px;\r\n}\r\n.prazo-entrega h2{\r\n  font-weight: bold;\r\n  color: rgb(0, 24, 181)\r\n}\r\n.prazo-entrega h5{\r\n  margin-top: -10px;\r\n  color: rgb(0, 24, 181);\r\n  font-size: 20px;\r\n}\r\n.botoes{\r\n  float: right;\r\n  margin-top: 16px;\r\n}\r\n.botoes button{\r\n  margin-right: 5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".card{\r\n  background-color: #FAFAFA;\r\n  border-bottom: 4px solid #E5E5E5;\r\n  margin-top: 40px;\r\n  /*margin-bottom: 20px;*/\r\n  box-shadow: 0px 0px 30px #edebeb;\r\n\r\n}\r\n.gradeHide{\r\n  display: none;\r\n}\r\n.gradeShow{\r\n  display: block;\r\n}\r\n.card-header{\r\n  padding: 10px;\r\n  background-color: #E5E5E5;\r\n}\r\n.card-body{\r\n  background-color: #FAFAFA;\r\n  padding: 10px;\r\n}\r\n.img{\r\n  display: block;\r\n  background-color: #000000;\r\n  width: 100%;\r\n  height: 200px;\r\n  background-image: url('https://s-media-cache-ak0.pinimg.com/736x/0f/82/19/0f8219c0c0b498c6b0a50cf1753a1214.jpg');\r\n  background-size: 360px 360px;\r\n  background-position: center;\r\n  display: table;\r\n  position: relative;\r\n}\r\n.titulo{\r\n  display: table-row;\r\n  position: absolute;\r\n  bottom: 0px;\r\n  padding: 5px;\r\n}\r\n.titulo h3{\r\n  color: #fff;\r\n}\r\n.degrade{\r\n  width: 100%;\r\n  height: 200px; /* For Safari 5.1 to 6.0 */ /* For Opera 11.1 to 12.0 */ /* For Firefox 3.6 to 15 */\r\n  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)); /* Standard syntax */\r\n}\r\n\r\n.foto-ecomendante{\r\n  display: inline-block;\r\n  float: left;\r\n  margin: 10px;\r\n  margin-left: 0px;\r\n}\r\n.foto-ecomendante img{\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 50%;\r\n}\r\n.classificacao{\r\n  margin-top: -7px;\r\n}\r\n.classificacao li{\r\n  display: inline-block;\r\n}\r\n.tempo-restante{\r\n  margin-top: 10px;\r\n}\r\n.tempo-restante span{\r\n  display: inline-block;\r\n  float: left;\r\n  font-size: 20px;\r\n  margin: 5px;\r\n  margin-top: 0px;\r\n}\r\n.tempo{\r\n  display: inline;\r\n}\r\n.tempo-dias{\r\n  color: red;\r\n  display: inline;\r\n}\r\n.botoes{\r\n  float: right;\r\n  /*margin-top: 16px;*/\r\n  margin: 10px;\r\n}\r\n.botoes button{\r\n  margin-left: 5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".container{\r\n    position: relative;\r\n    min-height: 75vh;\r\n}\r\n\r\n.bottom-bar-container{\r\n    position: absolute;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    bottom: 0px;\r\n    left: 0px;\r\n}\r\n.pagination{\r\n    position:absolute;\r\n}\r\n.pager{\r\n    padding: 0;\r\n    /*width: 100%;*/\r\n}\r\n\r\n.pagination > li > a:hover,\r\n.pagination > li > span:hover{\r\n  top: 0px;\r\n  border-bottom-width: 4px;\r\n}\r\n.pagination > li > a:active,\r\n.pagination > li > span:active{\r\n  top: 0px;\r\n  border-bottom-width: 4px;\r\n}\r\n.cadastro{\r\n  margin-bottom: 60px !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".header{\r\n  background-color: rgb(124, 57, 0);\r\n  width: 100%;\r\n  margin-left: 0px;\r\n}\r\n.page-header{\r\n  margin: 0px;\r\n  border-bottom: 0px;\r\n}\r\n.h1, h1{\r\n  font-family: 'Love Ya Like A Sister';\r\n  color: white;\r\n}\r\nsmall{\r\n  float: right;\r\n  color: #fff;\r\n  font-size: 20px;\r\n  font-family: 'Love Ya Like A Sister';\r\n  margin-top: 25px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".help-block {\r\n  position: absolute;\r\n}\r\n\r\n.help-triangle {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 10px;\r\n  background-color: #f7921e;\r\n  -webkit-transform: rotate(45deg);\r\n          transform: rotate(45deg);\r\n  width: 10px;\r\n  height: 10px;\r\n}\r\n\r\n.help-text {\r\n  position: relative;\r\n  background-color: #f7921e;\r\n  z-index: 1;\r\n  padding: 3px 6px;\r\n  top: 5px;\r\n  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.1);\r\n  border-radius: 3px;\r\n  color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".navbar{\r\n  background-color: rgb(94, 48, 0);\r\n  border-width: 0px 0px 4px 0px;\r\n  border-radius: 0px;\r\n  border-bottom: rgb(71, 37, 5) 4px solid;\r\n}\r\n.navbar-default .navbar-nav>li>a{\r\n  color: white;\r\n}\r\n\r\n.input{\r\n  border-radius: 5px;\r\n  margin: 10px;\r\n  min-width: 200px;\r\n\r\n}\r\ninput:focus{\r\n  box-shadow: 0px 0px 0px;\r\n}\r\n.btn-entrar{\r\n  min-width: 200px;\r\n}\r\n.dropdown-menu{\r\n  min-width: 200px;\r\n}\r\n.btn-cadastro{\r\n  margin-top: 10px;\r\n}\r\n.btn-entrar-dropdown{\r\n  margin: 5px;\r\n  margin-top: 10px;\r\n}\r\napp-mensagem-erro-input{\r\n  position: absolute;\r\n  left: 0;\r\n  z-index: 10;\r\n  width: 100%;\r\n  top: 35px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "/*#myCarousel .item:active > #logo{\r\n    opacity: 0.0;\r\n}*/\r\n\r\n#logo{\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100vh;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    z-index: 2;\r\n    /*pointer-events: none;*/\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    background-image: linear-gradient(to bottom, rgba(247,143,30,0.7), rgba(123,59,26,0.7));\r\n\r\n    /*background: radial-gradient(rgba(0,0,0,0), #000);*/\r\n}\r\n\r\n#logo h1{\r\n    font-family: \"Lobster 1.4\", sans-serif;\r\n    color: #fff;\r\n    font-size: 10rem;\r\n    text-shadow: 0px 0px 10px #462710;\r\n    margin-bottom: 6rem; \r\n    transition: all 0.3s;\r\n}\r\n\r\n#logo.cadastro h1{\r\n    -webkit-transform: translateY(-30vh);\r\n            transform: translateY(-30vh);\r\n}\r\n\r\n\r\n#logo a{\r\n    box-shadow: 0px 0px 5px #462710;\r\n}\r\n\r\n#logo.cadastro a{\r\n    -webkit-transform: scale(0.0);\r\n            transform: scale(0.0);\r\n    box-shadow: 0px 0px 5px #462710;\r\n}\r\n\r\n#logo .form{\r\n    /*display: none;*/\r\n    -webkit-transform: scale(0.0);\r\n            transform: scale(0.0);\r\n    position: absolute;\r\n    z-index: -100;\r\n    transition: all 0.3s;\r\n}\r\n\r\n#logo.cadastro .form{\r\n    -webkit-transform: scale(1.0);\r\n            transform: scale(1.0);\r\n    bottom: 20vh;\r\n    z-index: initial;\r\n}\r\n\r\ndiv.img{\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    width: 100%;\r\n    height: 100vh;\r\n}\r\n\r\ndiv.img.i01{\r\n    background-image: url(" + __webpack_require__(518) + ");\r\n}\r\n\r\ndiv.img.i02{\r\n    background-image: url(" + __webpack_require__(519) + ");\r\n}\r\ndiv.img.i03{\r\n    background-image: url(" + __webpack_require__(520) + ");\r\n}\r\n\r\ndiv.img.i04{\r\n    background-image: url(" + __webpack_require__(521) + ");\r\n}\r\n\r\ndiv.img.PB-01{\r\n    background-image: url(" + __webpack_require__(522) + ");\r\n}\r\n\r\ndiv.img.PB-02{\r\n    background-image: url(" + __webpack_require__(523) + ");\r\n}\r\ndiv.img.PB-03{\r\n    background-image: url(" + __webpack_require__(524) + ");\r\n}\r\n\r\ndiv.img.PB-04{\r\n    background-image: url(" + __webpack_require__(525) + ");\r\n}\r\n\r\n.carousel-indicators {\r\n    /*text-align: left;\r\n    margin-left: -45%;*/\r\n}\r\n.carousel-indicators li, .carousel-indicators .active{\r\n    /*width: 35px;\r\n    height: 35px;*/\r\n    /*border-width: medium;*/\r\n    border-radius: 100%;\r\n    background-color: #7B3B1A;\r\n    border-color: #f7921e;\r\n}\r\n\r\n.carousel-indicators .active{\r\n  background-color: #f7921e;\r\n}\r\n.carousel-inner img{\r\n  width: 100%;\r\n  height: 20%;\r\n}\r\n\r\n.carousel-caption{\r\n    left:35%;\r\n    right:35%;\r\n    width: 30%;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    border-radius: 10px;\r\n    padding: 30px;\r\n    margin-bottom: 60px;\r\n}\r\n\r\n.carousel-caption h3{\r\n    color: #f7921e;\r\n    font-family: \"Lobster 1.4\", sans-serif;\r\n    /*font-family: \"Love Ya Like A Sister\", sans-serif;*/\r\n\r\n}\r\n\r\n.carousel-caption p{\r\n    line-height: 2;    \r\n}\r\n\r\n.filter{\r\n    width: 100%;\r\n    height: 100vh;\r\n    /*background-color: rgba(0, 0, 0, 0.5);*/\r\n    background-image: linear-gradient(to bottom, rgba(247,143,30,0.7), rgba(123,59,26,0.7));\r\n    position: absolute;\r\n    z-index: 20;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".container.component{\r\n    padding: 200px 0;\r\n}\r\n\r\n#logo{\r\n    font-family: \"Lobster 1.4\", sans-serif;\r\n    color: #b25526;\r\n    font-size: 10rem;\r\n    /*text-shadow: 0px 0px 10px #462710;*/\r\n    margin-bottom: 12rem; \r\n    margin-top: 0;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.searchBar{\r\n    height: auto;\r\n    margin-bottom: 120px;\r\n}\r\n\r\n/*.input-group{\r\n    height: 300px;\r\n}*/\r\n\r\n.input-group[class*=\"col-\"] {\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n}\r\n\r\n.searchBar h1{\r\n    text-align: center;\r\n    margin-bottom: 20px;\r\n    height: 40px;\r\n    font-family: \"Lobster 1.4\", sans-serif;\r\n    color: #f7921e;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".component{\r\n    transition: -webkit-transform 0.3s;\r\n    transition: transform 0.3s;\r\n    transition: transform 0.3s, -webkit-transform 0.3s;\r\n}\r\n\r\n.component:hover{\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n    transition: -webkit-transform 0.5s;\r\n    transition: transform 0.5s;\r\n    transition: transform 0.5s, -webkit-transform 0.5s;\r\n}\r\n\r\n.thumbnail{\r\n    position: relative;\r\n}\r\n\r\n.thumbnail .filtro {\r\n    position: absolute;\r\n    left: 0px;\r\n    top:0px;\r\n    height: 100%;\r\n    background-color: rgba(70,39,16,0.6);\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    opacity: 0.0;\r\n    transition: opacity 0.5s;\r\n}\r\n\r\n.thumbnail .caption {\r\n    text-align: center;\r\n}\r\n\r\n.thumbnail:hover .filtro,\r\n.thumbnail:hover .caption {\r\n    opacity: 1.0;\r\n}\r\n\r\ndiv.caption h1{\r\n    font-family: \"Lobster 1.4\", sans-serif;\r\n    color: #f7921e;\r\n}\r\n\r\ndiv.caption h4{\r\n    /*font-family: \"Lobster 1.4\", sans-serif;*/\r\n    color: #fff;\r\n}\r\n\r\n.img{\r\n    background-color: grey;\r\n    height: 45vmin;\r\n    min-width: 45vmin;\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\n\r\n/*object-fit hack*/\r\n.container-object-fit {\r\n    width: 45vmin;\r\n    height: 45vmin;\r\n    /*background: #444;*/\r\n    /*margin: 0 auto;*/\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    overflow: hidden;\r\n}\r\n.container-object-fit .item-object-fit.wide {\r\n    max-width: 100%;\r\n    min-width: 100%;\r\n    max-height: initial;\r\n    height: auto;\r\n}\r\n.container-object-fit .item-object-fit.tall {\r\n    max-height: 100%;\r\n    min-height: 100%;\r\n    max-width: initial;                \r\n    width: auto;\r\n}\r\n.container-object-fit .item-object-fit.square {\r\n    max-height: 100%;\r\n    max-width: 100%;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "footer{\r\n    background-color: rgb(230, 230, 230);\r\n    padding: 30px 0 50px 0;\r\n}\r\n\r\nfooter h1{\r\n    font-family: \"Lobster 1.4\", sans-serif;\r\n}\r\n\r\nfooter #map{\r\n    width: 95%;\r\n    height: 300px;\r\n    border: solid 6px rgb(200, 200, 200);\r\n    /*border-top: none;*/\r\n    border-radius: 15px;\r\n}\r\n\r\n.info{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    height: 300px;\r\n}\r\n\r\n.info .endereco{\r\n    margin-top: auto;\r\n}\r\n\r\n.social{\r\n    height: 300px;\r\n}\r\n\r\n.social .row{\r\n    height: 25%;\r\n}\r\n\r\n.social a{\r\n    margin-left: 50%;\r\n}\r\n\r\n.social img{\r\n    height: 60%;\r\n}\r\n\r\nfooter.newsletter{\r\n    background-color: rgb(200, 200, 200);\r\n    padding: 30px 0 50px 0;\r\n}\r\n\r\n.newsletter .input-group{\r\n    padding: 15px 0;\r\n}\r\n\r\n.card{\r\n    width: 100%;\r\n}\r\n\r\n.line{\r\n    border: solid 8px #f7921e;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".component{\r\n    width: 100%;\r\n    height: 100vh;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    position: relative;\r\n    /*justify-content: center;*/\r\n}\r\n\r\n.formCadastro{\r\n    position: relative;\r\n    padding: 50px 50px;\r\n    border-radius: 5px;\r\n    background-color: #7B3B1A;\r\n    border-bottom: solid 4px #462710;\r\n    width: 30vw;\r\n    /*width: 100%;*/\r\n\r\n    /*background-color: rgba(0, 0, 0, 0.5);*/\r\n    /*background-color: rgba(70, 39, 16, 1.0);*/\r\n    /*display: flex;\r\n    align-items: center;\r\n    justify-content: center;*/\r\n}\r\n\r\n.formCadastro > button, .formCadastro > button:focus {\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    outline: none;\r\n    position: absolute;\r\n    right: 20px;\r\n    top: 20px;\r\n}\r\n\r\nform, form h1{\r\n    color: #fff;\r\n}\r\n\r\nform h1{\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.btn-group{\r\n    margin-left: 15px;\r\n}\r\n\r\n.radio label{\r\n    margin-right: 20px;\r\n}\r\n\r\n.btn-default:hover, .btn-default:focus, .btn-group.open .dropdown-toggle.btn-default, .btn-default{\r\n  background-color: #b25526;\r\n  border-color: #5d3311;\r\n  color: #fff;\r\n}\r\n\r\n.btn-default:active:hover, .btn-default.active:hover,\r\n.open > .dropdown-toggle.btn-default:hover,\r\n.btn-default:active:focus, .btn-default.active:focus,\r\n.open > .dropdown-toggle.btn-default:focus,\r\n.btn-default:active.focus, .btn-default.active.focus,\r\n.open > .dropdown-toggle.btn-default.focus {\r\n  background-color: #b25526;\r\n  border-color: #5d3311;\r\n  color: #fff;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".input{\r\n  border-radius: 5px;\r\n  margin: 10px;\r\n  min-width: 200px;\r\n\r\n}\r\ninput:focus{\r\n  box-shadow: 0px 0px 0px;\r\n}\r\n.btn-entrar{\r\n  min-width: 200px;\r\n}\r\n.dropdown-menu{\r\n  /*padding: 10px;*/\r\n  min-width: 200px;\r\n}\r\n.btn-cadastro{\r\n  margin-top: 10px;\r\n}\r\n.btn-entrar-dropdown{\r\n  margin: 5px;\r\n  margin-top: 10px;\r\n}\r\napp-mensagem-erro-input{\r\n  position: absolute;\r\n  left: 0;\r\n  z-index: 10;\r\n  width: 100%;\r\n  top: 35px;\r\n}\r\n\r\n\r\n.header{\r\n  /*background-color: rgb(124, 57, 0);*/\r\n  background-color: #7B3B1A;\r\n  width: 100%;\r\n  margin-left: 0px;\r\n  border-bottom: solid 4px #462710;\r\n  opacity: 0.0;\r\n  z-index: 100;\r\n  transition: 0.3s;\r\n  top: 0;\r\n  position:fixed;\r\n}\r\n\r\n.header.show {\r\n    opacity: 1.0;\r\n}\r\n\r\n.header.hide{\r\n  display: none;\r\n}\r\n\r\n.container{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.page-header{\r\n  margin: 0px;\r\n  border-bottom: 0px;\r\n}\r\n.h1, h1, .navbar-brand{\r\n  /*font-family: 'Love Ya Like A Sister';*/\r\n  font-family: 'Lobster 1.4';  \r\n  color: white;\r\n}\r\n.btn-group > .btn:first-child{\r\n  margin-left: 10px;\r\n}\r\n\r\n.btn-default:hover, .btn-default:focus, .btn-group.open .dropdown-toggle.btn-default, .btn-default{\r\n  background-color: #b25526;\r\n  border-color: #5d3311;\r\n  color: #fff;\r\n}\r\n\r\n.btn-default:active:hover, .btn-default.active:hover,\r\n.open > .dropdown-toggle.btn-default:hover,\r\n.btn-default:active:focus, .btn-default.active:focus,\r\n.open > .dropdown-toggle.btn-default:focus,\r\n.btn-default:active.focus, .btn-default.active.focus,\r\n.open > .dropdown-toggle.btn-default.focus {\r\n  background-color: #b25526;\r\n  border-color: #5d3311;\r\n  color: #fff;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".container-principal{\r\n  background-color: #FAFAFA;\r\n  box-shadow: 0px 0px 30px #edebeb;\r\n  border-radius: 10px 10px 10px 10px;\r\n  /*margin-top: -20px;*/\r\n}\r\n.guias-container{\r\n  border-radius: 10px 10px 0px 0px;\r\n  background-color: #F0F0F0;\r\n}\r\n.controle-container{\r\n  float: right;\r\n}\r\n.controle-container ul{\r\n  margin: 0px;\r\n  padding: 0px;\r\n}\r\n.controle-container li{\r\n  display: inline-block;\r\n  font-size: 15px;\r\n  margin-left: 25px;\r\n  /*background-color: #eee;*/\r\n  padding: 10px;\r\n  cursor: pointer;\r\n  /*border-radius: 50%;*/\r\n}\r\n.controle-container li:hover{\r\n  color: #EB7E1E;\r\n}\r\n.btn-group-justified > .btn-group .btn{\r\n  height: 41px;\r\n}\r\n.btn, .btn:hover{\r\n  border-width: 0px 0px 0px 0px;\r\n  margin-bottom: 0px;\r\n  margin-top: 0px;\r\n  border-radius: 0px;\r\n  border-color: #EB7E1E;\r\n  background-color: #F0F0F0;\r\n}\r\n.btn-select, .btn-select:hover{\r\n  border-width: 4px 0px 0px 0px;\r\n  border-color: #EB7E1E;\r\n  background-color: #FAFAFA;\r\n}\r\n.gradeHide{\r\n  display: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".termos-container {\r\n\tmargin-bottom: 60px;\r\n}\r\n.termos{\r\n  max-height: 40vh;\r\n  overflow-y: scroll;\r\n}\r\n.modal.show {\r\n\tdisplay:block;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 235:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ 236:
/***/ (function(module, exports) {

module.exports = "<div class=\"listaShow\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n\r\n      <div class=\"card\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-2\">\r\n            <div class=\"img\">\r\n              <!-- <img src=\"https://s-media-cache-ak0.pinimg.com/736x/0f/82/19/0f8219c0c0b498c6b0a50cf1753a1214.jpg\" alt=\"\"> -->\r\n              <div class=\"titulo\">\r\n                <h3>\r\n                  Lata de lixo feita com tampinhas de garrafa\r\n                </h3>\r\n              </div>\r\n              <div class=\"degrade\"></div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"card-header\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"foto-ecomendante\">\r\n                    <img src=\"https://68.media.tumblr.com/avatar_372ef1273827_128.png\" alt=\"\">\r\n                  </div>\r\n                  <h5 class=\"nome-encomendante\">Juana da silva</h5>\r\n                  <ul class=\"classificacao\">\r\n                    <li><div class=\"glyphicon glyphicon-star\"></div></li>\r\n                    <li><div class=\"glyphicon glyphicon-star\"></div></li>\r\n                    <li><div class=\"glyphicon glyphicon-star\"></div></li>\r\n                    <li><div class=\"glyphicon glyphicon-star-empty\"></div></li>\r\n                    <li><div class=\"glyphicon glyphicon-star-empty\"></div></li>\r\n                  </ul>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"tempo-restante\">\r\n                    <span class=\"glyphicon glyphicon-time\"></span>\r\n                    <h4 class=\"tempo\">Expira em:</h4>\r\n                    <h4 class=\"tempo-dias\">5 dias 5:40 min</h4>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <p class=\"card-text\">\r\n                Olá, queria encomendar essa linda lata de lixo pro aniversário da minha sobrinha Jamile\r\n                é muito importante pois ela adora latas de lixo, por isso preciso dela até o dia\r\n                26 de junho pra bater os parabéns dela, ela ta fazendo 7 anos e queria uma lata de lixo.\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <div class=\"price\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <h3 class=\"unidades\">1 Unidade</h3>\r\n                  <h3 class=\"valor-total\">R$ 54,99</h3>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"prazo-entrega\">\r\n                    <h2>25</h2>\r\n                    <h5>dias</h5>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n\r\n                  <div class=\"botoes\">\r\n                    <button class=\"btn btn-default\">Recusar</button>\r\n                    <button class=\"btn btn-primary\">Aceitar</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 237:
/***/ (function(module, exports) {

module.exports = "<div class=\"gradeHide\">\r\n<div class=\"row\">\r\n  <div class=\"col-md-4\">\r\n\r\n    <div class=\"card\">\r\n      <div class=\"img\">\r\n        <!-- <img src=\"https://s-media-cache-ak0.pinimg.com/736x/0f/82/19/0f8219c0c0b498c6b0a50cf1753a1214.jpg\" alt=\"\"> -->\r\n        <div class=\"titulo\">\r\n          <h3>\r\n            Lata de lixo feita com tampinhas de garrafa\r\n          </h3>\r\n        </div>\r\n        <div class=\"degrade\"></div>\r\n      </div>\r\n\r\n      <div class=\"card-header\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <div class=\"foto-ecomendante\">\r\n              <img src=\"https://68.media.tumblr.com/avatar_372ef1273827_128.png\" alt=\"\">\r\n            </div>\r\n            <h5 class=\"nome-encomendante\">Juana da silva</h5>\r\n            <ul class=\"classificacao\">\r\n              <li><div class=\"glyphicon glyphicon-star\"></div></li>\r\n              <li><div class=\"glyphicon glyphicon-star\"></div></li>\r\n              <li><div class=\"glyphicon glyphicon-star\"></div></li>\r\n              <li><div class=\"glyphicon glyphicon-star-empty\"></div></li>\r\n              <li><div class=\"glyphicon glyphicon-star-empty\"></div></li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"tempo-restante\">\r\n              <span class=\"glyphicon glyphicon-time\"></span>\r\n              <h4 class=\"tempo\">Expira em:</h4>\r\n              <h4 class=\"tempo-dias\">5 dias 5:40 min</h4>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <p class=\"card-text\">\r\n          Olá, queria encomendar essa linda lata de lixo pro aniversário da minha sobrinha Jamile\r\n          é muito importante pois ela adora latas de lixo, por isso preciso dela até o dia\r\n          26 de junho pra bater os parabéns dela, ela ta fazendo 7 anos e queria uma lata de\r\n          lixo com o tema da Frozen.\r\n        </p>\r\n\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"botoes\">\r\n            <button class=\"btn btn-default\">Recusar</button>\r\n            <button class=\"btn btn-primary\">Aceitar</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"col-md-4\"></div>\r\n  <div class=\"col-md-4\"></div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ 238:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n  <!-- Formulário de cadastro do artesão -->\r\n  <div class=\"form-cadastro-artesao\" *ngIf=\"tipoDeUsuario == 'artesao'\">\r\n    <form *ngIf=\"pageCount !== 4\" class=\"cadastro\">\r\n      <fieldset *ngIf=\"pageCount == 0\">\r\n        <legend>Dados Pessoais</legend>\r\n        <div class=\"form-group col-md-8\" [class.has-error]=\"verificadores.nome.estado == false\">\r\n          <label for=\"inputNome\" class=\"control-label\">Nome</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"inputNome\" placeholder=\"Informe seu nome completo\" name=\"nome\" [(ngModel)]=\"novoUsuario.nome\" (change)=\"verificaNome()\">\r\n          <app-mensagem-erro-input *ngIf=\"verificadores.nome.estado == false\" mensagemDeErro=\"{{verificadores.nome.mensagem}}\"></app-mensagem-erro-input>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-4\" [class.has-error]=\"verificadores.cpf.estado == false\">\r\n          <label for=\"inputCpf\" class=\"control-label\">CPF</label>\r\n          <input type=\"text\" class=\"form-control\" name=\"cpf\" placeholder=\"Digite seu CPF \" [(ngModel)]=\"novoUsuario.cpf\" [textMask]=\"{mask:cpfMask}\" (change)=\"verificaCPF()\">\r\n          <app-mensagem-erro-input *ngIf=\"verificadores.cpf.estado == false\" mensagemDeErro=\"{{verificadores.cpf.mensagem}}\"></app-mensagem-erro-input>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-4\" [class.has-error]=\"verificadores.dataDeNascimento.estado == false\">\r\n          <label for=\"inputData\" class=\"control-label\">Data de nascimento</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"inputData\" placeholder=\"Digite sua data de nascimento\" name=\"dataDeNascimento\" [textMask]=\"{mask:dateMask}\" [(ngModel)]=\"novoUsuario.dataDeNascimento\" (change)=\"verificaDataDeNascimento()\">\r\n          <app-mensagem-erro-input *ngIf=\"verificadores.dataDeNascimento.estado == false\" mensagemDeErro=\"{{verificadores.dataDeNascimento.mensagem}}\"></app-mensagem-erro-input>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-8\" [class.has-error]=\"verificadores.naturalidade.estado == false\">\r\n          <label for=\"inputNaturalidade\" class=\"control-label\">Naturalidade</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"inputNaturalidade\" placeholder=\"Informe onde você nasceu\" name=\"naturalidade\" [(ngModel)]=\"novoUsuario.naturalidade\" (change)=\"verificaNaturalidade()\">\r\n          <app-mensagem-erro-input *ngIf=\"verificadores.naturalidade.estado == false\" mensagemDeErro=\"{{verificadores.naturalidade.mensagem}}\"></app-mensagem-erro-input>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-4\" [class.has-error]=\"verificadores.email.estado == false\">\r\n          <label for=\"inputEmail\" class=\"control-label\">Email</label>\r\n          <input type=\"email\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Informe o seu endereço de e-mail\" name=\"email\" [(ngModel)]=\"novoUsuario.email\" (change)=\"verificaEmail()\">\r\n          <app-mensagem-erro-input *ngIf=\"verificadores.email.estado == false\" mensagemDeErro=\"{{verificadores.email.mensagem}}\"></app-mensagem-erro-input>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-4\" [class.has-error]=\"verificadores.celular.estado == false\">\r\n          <label for=\"inputCelular\" class=\"control-label\">Celular</label>\r\n          <input type=\"tel\" class=\"form-control\" id=\"inputTelefone\" placeholder=\"Insira seu telefone celular\" name=\"celular\" [textMask]=\"{mask:cellphoneMask}\" [(ngModel)]=\"novoUsuario.celular\" (change)=\"verificaCelular()\">\r\n          <app-mensagem-erro-input *ngIf=\"verificadores.celular.estado == false\" mensagemDeErro=\"{{verificadores.celular.mensagem}}\"></app-mensagem-erro-input>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-4\" [class.has-error]=\"verificadores.telefone.estado == false\">\r\n          <label for=\"inputTelefone\" class=\"control-label\">Telefone Fixo</label>\r\n          <input type=\"tel\" class=\"form-control\" id=\"inputTelefone\" placeholder=\"Insira seu telefone fixo, se houver\" name=\"telefone\" [textMask]=\"{mask:phoneMask}\" [(ngModel)]=\"novoUsuario.telefone\" (change)=\"verificaTelefone()\">\r\n          <app-mensagem-erro-input *ngIf=\"verificadores.telefone.estado == false\" mensagemDeErro=\"{{verificadores.telefone.mensagem}}\"></app-mensagem-erro-input>\r\n        </div>\r\n      </fieldset>\r\n\r\n      <fieldset *ngIf=\"pageCount == 1\" >\r\n        <legend>Dados Profissionais</legend>\r\n        <div class=\"form-group col-md-8\" [class.has-error]=\"verificadores.nomeComercial.estado == false\">\r\n          <label for=\"inputNomeComercial\" class=\"control-label\">Nome Comercial</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"inputNomeComercial\" placeholder=\"Dê um nome para seu negócio\" name=\"nomeComercial\" [(ngModel)]=\"novoUsuario.nomeComercial\" (change)=\"verificaNomeComercial()\">\r\n          <app-mensagem-erro-input *ngIf=\"verificadores.nomeComercial.estado == false\" mensagemDeErro=\"{{verificadores.nomeComercial.mensagem}}\"></app-mensagem-erro-input>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-4\" [class.has-error]=\"verificadores.categoria.estado == false\">\r\n          <label for=\"select\" class=\"control-label\">Categoria</label>\r\n            <select class=\"form-control\" id=\"select\" name=\"categoria\" [(ngModel)]=\"novoUsuario.categoria\" (change)=\"verificaCategoria()\">\r\n              <option value=\"0\" selected>Informe a principal categoria de atuação</option>\r\n              <option value=\"1\">1</option>\r\n              <option value=\"2\">2</option>\r\n              <option value=\"3\">3</option>\r\n              <option value=\"4\">4</option>\r\n              <option value=\"5\">5</option>\r\n            </select>\r\n           <app-mensagem-erro-input *ngIf=\"verificadores.categoria.estado == false\" mensagemDeErro=\"{{verificadores.categoria.mensagem}}\"></app-mensagem-erro-input>\r\n        </div>\r\n\r\n         <div class=\"form-group col-md-12\" [class.has-error]=\"verificadores.descricao.estado == false\">\r\n          <label for=\"textArea\" class=\"control-label\">Descrição</label>\r\n          <textarea class=\"form-control\" rows=\"3\" id=\"textArea\" placeholder=\"Faça uma descrição simples para que os potenciais clientes conheçam a base de seu trabalho\" name=\"descricao\" [(ngModel)]=\"novoUsuario.descricao\" (change)=\"verificaDescricao()\"></textarea>\r\n          <app-mensagem-erro-input *ngIf=\"verificadores.descricao.estado == false\" mensagemDeErro=\"{{verificadores.descricao.mensagem}}\"></app-mensagem-erro-input>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-4\" [class.has-error]=\"verificadores.rua.estado == false\">\r\n          <label for=\"inputRua\" class=\"control-label\">Rua</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"inputRua\" placeholder=\"Informe a rua do local onde trabalha\" name=\"rua\" [(ngModel)]=\"novoUsuario.rua\" (change)=\"verificaRua()\">\r\n          <app-mensagem-erro-input *ngIf=\"verificadores.rua.estado == false\" mensagemDeErro=\"{{verificadores.rua.mensagem}}\"></app-mensagem-erro-input>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-2\" [class.has-error]=\"verificadores.numero.estado == false\">\r\n          <label for=\"inputNumero\" class=\"control-label\">Número</label>\r\n          <input type=\"texto\" class=\"form-control\" id=\"inputNumero\" placeholder=\"Número\" name=\"numero\" [(ngModel)]=\"novoUsuario.numero\" (change)=\"verificaNumero()\">\r\n          <app-mensagem-erro-input *ngIf=\"verificadores.numero.estado == false\" mensagemDeErro=\"{{verificadores.numero.mensagem}}\"></app-mensagem-erro-input>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-2\" [class.has-error]=\"verificadores.complemento.estado == false\">\r\n          <label for=\"inputComplemento\" class=\"control-label\" [class.has-error]=\"verificadores.complemento == false\">Complemento</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"inputComplemento\" placeholder=\"Se houver\" name=\"complemento\" [(ngModel)]=\"novoUsuario.complemento\" (change)=\"verificaComplemento()\">\r\n          <app-mensagem-erro-input *ngIf=\"verificadores.complemento.estado == false\" mensagemDeErro=\"{{verificadores.complemento.mensagem}}\"></app-mensagem-erro-input>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-4\" [class.has-error]=\"verificadores.bairro.estado == false\">\r\n          <label for=\"inputBairro\" class=\"control-label\">Bairro</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"inputBairro\" placeholder=\"Informe o bairro\" name=\"bairro\" [(ngModel)]=\"novoUsuario.bairro\" (change)=\"verificaBairro()\">\r\n          <app-mensagem-erro-input *ngIf=\"verificadores.bairro.estado == false\" mensagemDeErro=\"{{verificadores.bairro.mensagem}}\"></app-mensagem-erro-input>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-4\" [class.has-error]=\"verificadores.cidade.estado == false\">\r\n          <label for=\"inputCidade\" class=\"control-label\">Cidade</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"inputCidade\" placeholder=\"Informe a cidade onde você atua\" name=\"cidade\" [(ngModel)]=\"novoUsuario.cidade\" (change)=\"verificaCidade()\">\r\n          <app-mensagem-erro-input *ngIf=\"verificadores.cidade.estado == false\" mensagemDeErro=\"{{verificadores.cidade.mensagem}}\"></app-mensagem-erro-input>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-4\" [class.has-error]=\"verificadores.estado.estado == false\">\r\n          <label for=\"inputEstado\" class=\"control-label\">Estado</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"inputEstado\" placeholder=\"Informe o estado\" name=\"estado\" [(ngModel)]=\"novoUsuario.estado\" (change)=\"verificaEstado()\">\r\n           <app-mensagem-erro-input *ngIf=\"verificadores.estado.estado == false\" mensagemDeErro=\"{{verificadores.estado.mensagem}}\"></app-mensagem-erro-input>\r\n        </div>\r\n        <div class=\"form-group col-md-4\" [class.has-error]=\"verificadores.cep.estado == false\">\r\n          <label for=\"inputCep\" class=\"control-label\">CEP</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"inputCep\" placeholder=\"Insira o CEP do seu local de trabalho\" name=\"cep\" [(ngModel)]=\"novoUsuario.cep\" [textMask]=\"{mask:cepMask}\" (change)=\"verificaCep()\">\r\n           <app-mensagem-erro-input *ngIf=\"verificadores.cep.estado == false\" mensagemDeErro=\"{{verificadores.cep.mensagem}}\"></app-mensagem-erro-input>\r\n        </div>\r\n\r\n      </fieldset>\r\n\r\n      <fieldset *ngIf=\"pageCount == 2\" >\r\n        <legend>Dados Bancários</legend>\r\n\r\n        <div class=\"form-group col-md-4\" [class.has-error]=\"verificadores.numeroCartao.estado == false\">\r\n          <label for=\"inputCard\" class=\"control-label\">Número do Cartão</label>\r\n          <input type=\"texto\" class=\"form-control\" id=\"inputCard\" placeholder=\"Informe somente os números, sem espaços\" name=\"numeroCartao\" [textMask]=\"{mask:cardNumberMask}\" [(ngModel)]=\"novoUsuario.numeroCartao\" (change)=\"verificaNumeroCartao()\">\r\n          <app-mensagem-erro-input *ngIf=\"verificadores.numeroCartao.estado == false\" mensagemDeErro=\"{{verificadores.numeroCartao.mensagem}}\"></app-mensagem-erro-input>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-2\" [class.has-error]=\"verificadores.vencimentoCartao.estado == false\">\r\n          <label for=\"inputVencimento\" class=\"control-label\">Vencimento</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"inputVencimento\" placeholder=\"Mês e ano\" name=\"vencimentoCartao\" [textMask]=\"{mask:cardEnd}\" [(ngModel)]=\"novoUsuario.vencimentoCartao\" (change)=\"verificaVencimentoCartao()\">\r\n          <app-mensagem-erro-input *ngIf=\"verificadores.vencimentoCartao.estado == false\" mensagemDeErro=\"{{verificadores.vencimentoCartao.mensagem}}\"></app-mensagem-erro-input>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-4\" [class.has-error]=\"verificadores.titularCartao.estado == false\">\r\n          <label for=\"inputTitular\" class=\"control-label\">Titular</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"inputTitular\" placeholder=\"Informe o nome do titular como no cartão\" name=\"titularCartao\" [(ngModel)]=\"novoUsuario.titularCartao\" (change)=\"verificaTitularCartao()\">\r\n          <app-mensagem-erro-input *ngIf=\"verificadores.titularCartao.estado == false\" mensagemDeErro=\"{{verificadores.titularCartao.mensagem}}\"></app-mensagem-erro-input>\r\n        </div>\r\n      </fieldset>\r\n\r\n      <fieldset *ngIf=\"pageCount == 3\" >\r\n        <legend>Dados de Perfil</legend>\r\n\r\n        <!--<div class=\"form-group col-md-12\">\r\n          <label for=\"InputFile\">Procurar Arquivo</label>\r\n          <input type=\"file\" id=\"InputFile\">\r\n          <p class=\"help-block\">Busque uma foto onde você seja facilmente reconhecido</p>\r\n        </div>-->\r\n\r\n        <div class=\"form-group col-md-12\" [class.has-error]=\"verificadores.nomeDeUsuario.estado == false\">\r\n          <label for=\"inputUser\" class=\"control-label\">Nome de usuário</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"inputUser\" placeholder=\"Insira um nome de usuário para usar na plataforma\" maxlength=\"12\" name=\"nomeDeUsuario\" [(ngModel)]=\"novoUsuario.nomeDeUsuario\" (change)=\"verificaNomeDeUsuario()\">\r\n          <app-mensagem-erro-input *ngIf=\"verificadores.nomeDeUsuario.estado == false\" mensagemDeErro=\"{{verificadores.nomeDeUsuario.mensagem}}\"></app-mensagem-erro-input>\r\n        </div>\r\n\r\n         <div class=\"form-group col-md-6\" [class.has-error]=\"verificadores.senha.estado == false || verificadores.confirmacaoSenha.estado == false\">\r\n          <label for=\"inputSenha\" class=\"control-label\">Senha</label>\r\n          <input type=\"password\" class=\"form-control\" id=\"inputSenha\" placeholder=\"Insira uma senha com no mínimo 8 dígitos\" maxlength=\"20\" name=\"senha\" [(ngModel)]=\"novoUsuario.senha\" (change)=\"verificaSenha()\">\r\n          <app-mensagem-erro-input *ngIf=\"verificadores.senha.estado == false\" mensagemDeErro=\"{{verificadores.senha.mensagem}}\"></app-mensagem-erro-input>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-6\" [class.has-error]=\"verificadores.confirmacaoSenha.estado == false || verificadores.senha.estado == false\">\r\n          <label for=\"inputConfirma\" class=\"control-label\">Confirmação de Senha</label>\r\n          <input type=\"password\" class=\"form-control\" id=\"inputConfirma\" placeholder=\"Repita a senha\" maxlength=\"20\" name=\"confirmacaoSenha\" [(ngModel)]=\"confirmacaoSenha\" (change)=\"verificaConfirmacaoSenha()\">\r\n          <app-mensagem-erro-input *ngIf=\"verificadores.confirmacaoSenha.estado == false\" mensagemDeErro=\"{{verificadores.confirmacaoSenha.mensagem}}\"></app-mensagem-erro-input>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-12\" [class.has-error]=\"verificadores.linkPaginaWeb.estado == false\">\r\n          <label for=\"inputSite\" class=\"control-label\">Página Web / Portfólio</label>\r\n          <input type=\"url\" class=\"form-control\" id=\"inputSite\" placeholder=\"Adicione um link para um site onde exponha seu trabalho\" name=\"linkPaginaWeb\" [(ngModel)]=\"novoUsuario.linkPaginaWeb\" (change)=\"verificaLinkPaginaWeb()\">\r\n          <app-mensagem-erro-input *ngIf=\"verificadores.linkPaginaWeb.estado == false\" mensagemDeErro=\"{{verificadores.linkPaginaWeb.mensagem}}\"></app-mensagem-erro-input>\r\n        </div>\r\n      </fieldset>\r\n\r\n    </form>\r\n  </div>\r\n\r\n  <!-- Formulário de cadastro do cliente -->\r\n  <div class=\"form-cadastro-cliente\" *ngIf=\"tipoDeUsuario == 'cliente'\">\r\n    <form *ngIf=\"pageCount !== 3\" class=\"cadastro\">\r\n      <fieldset *ngIf=\"pageCount == 0\">\r\n        <legend>Dados Pessoais</legend>\r\n        <div class=\"form-group col-md-8\" [class.has-error]=\"verificadores.nome.estado == false\">\r\n          <label for=\"inputNome\" class=\"control-label\">Nome</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"inputNome\" placeholder=\"Informe seu nome completo\" name=\"nome\" [(ngModel)]=\"novoUsuario.nome\" (change)=\"verificaNome()\">\r\n          <app-mensagem-erro-input *ngIf=\"verificadores.nome.estado == false\" mensagemDeErro=\"{{verificadores.nome.mensagem}}\"></app-mensagem-erro-input>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-4\" [class.has-error]=\"verificadores.dataDeNascimento.estado == false\">\r\n          <label for=\"inputData\" class=\"control-label\">Data de nascimento</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"inputData\" placeholder=\"Insira sua data de nascimento\" name=\"dataDeNascimento\" [textMask]=\"{mask:dateMask}\" [(ngModel)]=\"novoUsuario.dataDeNascimento\" (change)=\"verificaDataDeNascimento()\">\r\n          <app-mensagem-erro-input *ngIf=\"verificadores.dataDeNascimento.estado == false\" mensagemDeErro=\"{{verificadores.dataDeNascimento.mensagem}}\"></app-mensagem-erro-input>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-4\" [class.has-error]=\"verificadores.cpf.estado == false\">\r\n          <label for=\"inputCpf\" class=\"control-label\">CPF</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"inputCpf\" placeholder=\"Informe apenas os números do CPF\" name=\"cpf\" [textMask]=\"{mask:cpfMask}\" [(ngModel)]=\"novoUsuario.cpf\" (change)=\"verificaCPF()\">\r\n          <app-mensagem-erro-input *ngIf=\"verificadores.cpf.estado == false\" mensagemDeErro=\"{{verificadores.cpf.mensagem}}\"></app-mensagem-erro-input>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-4\" [class.has-error]=\"verificadores.email.estado == false\">\r\n          <label for=\"inputEmail\" class=\"control-label\">Email</label>\r\n          <input type=\"email\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Informe o seu endereço de e-mail\" name=\"email\" [(ngModel)]=\"novoUsuario.email\" (change)=\"verificaEmail()\">\r\n          <app-mensagem-erro-input *ngIf=\"verificadores.email.estado == false\" mensagemDeErro=\"{{verificadores.email.mensagem}}\"></app-mensagem-erro-input>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-4\" [class.has-error]=\"verificadores.celular.estado == false\">\r\n          <label for=\"inputCelular\" class=\"control-label\">Celular</label>\r\n          <input type=\"tel\" class=\"form-control\" id=\"inputTelefone\" placeholder=\"Insira seu telefone celular\" name=\"celular\" [textMask]=\"{mask:cellphoneMask}\" [(ngModel)]=\"novoUsuario.celular\" (change)=\"verificaCelular()\">\r\n          <app-mensagem-erro-input *ngIf=\"verificadores.celular.estado == false\" mensagemDeErro=\"{{verificadores.celular.mensagem}}\"></app-mensagem-erro-input>\r\n        </div>\r\n      </fieldset>\r\n\r\n      <fieldset *ngIf=\"pageCount == 1\">\r\n        <legend>Dados Pessoais - Endereço</legend>\r\n        <div class=\"form-group col-md-4\" [class.has-error]=\"verificadores.rua.estado == false\">\r\n          <label for=\"inputRua\" class=\"control-label\">Rua</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"inputRua\" placeholder=\"Informe a rua do local onde mora\" name=\"rua\" [(ngModel)]=\"novoUsuario.rua\" (change)=\"verificaRua()\">\r\n          <app-mensagem-erro-input *ngIf=\"verificadores.rua.estado == false\" mensagemDeErro=\"{{verificadores.rua.mensagem}}\"></app-mensagem-erro-input>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-2\" [class.has-error]=\"verificadores.numero.estado == false\">\r\n          <label for=\"inputNumero\" class=\"control-label\">Número</label>\r\n          <input type=\"texto\" class=\"form-control\" id=\"inputNumero\" placeholder=\"Número\" name=\"numero\" [(ngModel)]=\"novoUsuario.numero\" (change)=\"verificaNumero()\">\r\n          <app-mensagem-erro-input *ngIf=\"verificadores.numero.estado == false\" mensagemDeErro=\"{{verificadores.numero.mensagem}}\"></app-mensagem-erro-input>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-2\" [class.has-error]=\"verificadores.complemento.estado == false\">\r\n          <label for=\"inputComplemento\" class=\"control-label\" [class.has-error]=\"verificadores.complemento == false\">Complemento</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"inputComplemento\" placeholder=\"Se houver\" name=\"complemento\" [(ngModel)]=\"novoUsuario.complemento\" (change)=\"verificaComplemento()\">\r\n          <app-mensagem-erro-input *ngIf=\"verificadores.complemento.estado == false\" mensagemDeErro=\"{{verificadores.complemento.mensagem}}\"></app-mensagem-erro-input>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-4\" [class.has-error]=\"verificadores.bairro.estado == false\">\r\n          <label for=\"inputBairro\" class=\"control-label\">Bairro</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"inputBairro\" placeholder=\"Informe o bairro\" name=\"bairro\" [(ngModel)]=\"novoUsuario.bairro\" (change)=\"verificaBairro()\">\r\n          <app-mensagem-erro-input *ngIf=\"verificadores.bairro.estado == false\" mensagemDeErro=\"{{verificadores.bairro.mensagem}}\"></app-mensagem-erro-input>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-4\" [class.has-error]=\"verificadores.cidade.estado == false\">\r\n          <label for=\"inputCidade\" class=\"control-label\">Cidade</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"inputCidade\" placeholder=\"Informe a cidade onde você vive\" name=\"cidade\" [(ngModel)]=\"novoUsuario.cidade\" (change)=\"verificaCidade()\">\r\n          <app-mensagem-erro-input *ngIf=\"verificadores.cidade.estado == false\" mensagemDeErro=\"{{verificadores.cidade.mensagem}}\"></app-mensagem-erro-input>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-4\" [class.has-error]=\"verificadores.estado.estado == false\">\r\n          <label for=\"inputEstado\" class=\"control-label\">Estado</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"inputEstado\" placeholder=\"Informe o estado\" name=\"estado\" [(ngModel)]=\"novoUsuario.estado\" (change)=\"verificaEstado()\">\r\n          <app-mensagem-erro-input *ngIf=\"verificadores.estado.estado == false\" mensagemDeErro=\"{{verificadores.estado.mensagem}}\"></app-mensagem-erro-input>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-4\" [class.has-error]=\"verificadores.cep.estado == false\">\r\n          <label for=\"inputCep\" class=\"control-label\">CEP</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"inputCep\" placeholder=\"Ex.: 12345-678\" name=\"cep\" [textMask]=\"{mask:cepMask}\" [(ngModel)]=\"novoUsuario.cep\" (change)=\"verificaCep()\">\r\n          <app-mensagem-erro-input *ngIf=\"verificadores.cep.estado == false\" mensagemDeErro=\"{{verificadores.cep.mensagem}}\"></app-mensagem-erro-input>\r\n        </div>\r\n      </fieldset>\r\n\r\n      <fieldset *ngIf=\"pageCount == 2\">\r\n        <legend>Dados de Perfil</legend>\r\n        <div class=\"form-group col-md-12\" [class.has-error]=\"verificadores.nomeDeUsuario.estado == false\">\r\n          <label for=\"inputUser\" class=\"control-label\">Nome de usuário</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"inputUser\" placeholder=\"Insira um nome de usuário para usar na plataforma\" maxlength=\"12\" name=\"nomeDeUsuario\" [(ngModel)]=\"novoUsuario.nomeDeUsuario\" (change)=\"verificaNomeDeUsuario()\">\r\n          <app-mensagem-erro-input *ngIf=\"verificadores.nomeDeUsuario.estado == false\" mensagemDeErro=\"{{verificadores.nomeDeUsuario.mensagem}}\"></app-mensagem-erro-input>\r\n        </div>\r\n\r\n         <div class=\"form-group col-md-6\" [class.has-error]=\"verificadores.senha.estado == false || verificadores.confirmacaoSenha.estado == false\">\r\n          <label for=\"inputSenha\" class=\"control-label\">Senha</label>\r\n          <input type=\"password\" class=\"form-control\" id=\"inputSenha\" placeholder=\"Insira uma senha com no mínimo 8 dígitos\" maxlength=\"20\" name=\"senha\" [(ngModel)]=\"novoUsuario.senha\" (change)=\"verificaSenha()\">\r\n          <app-mensagem-erro-input *ngIf=\"verificadores.senha.estado == false\" mensagemDeErro=\"{{verificadores.senha.mensagem}}\"></app-mensagem-erro-input>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-6\" [class.has-error]=\"verificadores.confirmacaoSenha.estado == false || verificadores.senha.estado == false\">\r\n          <label for=\"inputConfirma\" class=\"control-label\">Confirmação de Senha</label>\r\n          <input type=\"password\" class=\"form-control\" id=\"inputConfirma\" placeholder=\"Repita a senha\" maxlength=\"20\" name=\"confirmacaoSenha\" [(ngModel)]=\"confirmacaoSenha\" (change)=\"verificaConfirmacaoSenha()\">\r\n          <app-mensagem-erro-input *ngIf=\"verificadores.confirmacaoSenha.estado == false\" mensagemDeErro=\"{{verificadores.confirmacaoSenha.mensagem}}\"></app-mensagem-erro-input>\r\n        </div>\r\n      </fieldset>\r\n\r\n    </form>\r\n  </div>\r\n\r\n  <div class=\"col-md-12\" *ngIf=\"tipoDeUsuario == 'artesao' && pageCount == 4 || tipoDeUsuario == 'cliente' && pageCount == 3\">\r\n    <app-termos-confirmacao></app-termos-confirmacao>\r\n  </div>\r\n\r\n  <!-- <app-bottom-bar (page)=\"capturar($event)\"></app-bottom-bar> -->\r\n  <div class=\"col-md-12 bottom-bar-container\">\r\n    <ul *ngIf=\"tipoDeUsuario == 'artesao' && pageCount < 4 || tipoDeUsuario == 'cliente' && pageCount < 3\" class=\"pagination\">\r\n      <!--<li class=\"disabled\"><a href=\"#\">&laquo;</a></li>-->\r\n      <li [class.active]=\"pageCount == 0\"><a>1</a></li>\r\n      <li [class.active]=\"pageCount == 1\"><a>2</a></li>\r\n      <li [class.active]=\"pageCount == 2\"><a>3</a></li>\r\n      <li *ngIf=\"tipoDeUsuario == 'artesao'\" [class.active]=\"pageCount == 3\"><a>4</a></li>\r\n      <!--<li><a href=\"#\">&raquo;</a></li>-->\r\n    </ul>\r\n\r\n    <ul class=\"pager pager-primary col-md-12\">\r\n      <li class=\"previous\" *ngIf=\"pageCount !== 0\"><a (click)=\"previous()\">&larr; Voltar</a></li>\r\n      <li *ngIf=\"tipoDeUsuario == 'artesao' && pageCount < 4 || tipoDeUsuario == 'cliente' && pageCount < 3\" class=\"next\"><a (click)=\"next()\">Avançar &rarr;</a></li>\r\n    </ul>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 239:
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"page-header\">\r\n          <a routerLink=\"/inicio\" href=\"#\">\r\n            <h1>Quixique</h1>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <small>Igual, mas diferente</small>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</header>\r\n"

/***/ }),

/***/ 240:
/***/ (function(module, exports) {

module.exports = "<div class=\"help-block\">\r\n  <div class=\"help-triangle\"></div>\r\n  <div class=\"help-text\">\r\n  \t{{ mensagemDeErro }}\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 241:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\"></div>\r\n      <div class=\"col-md-4\"></div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"collapse navbar-collapse\">\r\n          <ul class=\"nav navbar-nav navbar-right\">\r\n            <li>\r\n              <div class=\"btn-group btn-entrar-dropdown\">\r\n                <button class=\"btn btn-primary btn-sm dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Entrar <span class=\"caret\"></span>\r\n                </button>\r\n                <ul class=\"dropdown-menu\">\r\n                  <form novalidate=\"true\">\r\n                    <li>\r\n                      <div class=\"input-group input\" [class.has-error]=\"dadosLogin.email.estado === false\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Email\" aria-describedby=\"basic-addon1\" name=\"emailInput\" [(ngModel)]=\"dadosLogin.email.valor\" (change)=\"verificaEmail()\">\r\n                        <app-mensagem-erro-input *ngIf=\"dadosLogin.email.estado === false\" mensagemDeErro=\"{{dadosLogin.email.mensagem}}\"></app-mensagem-erro-input>\r\n                      </div>\r\n                    </li>\r\n                    <li>\r\n                      <div class=\"input-group input\" [class.has-error]=\"dadosLogin.senha.estado === false\">\r\n                        <input type=\"password\" class=\"form-control\" placeholder=\"Senha\" aria-describedby=\"basic-addon1\" name=\"senhaInput\" [(ngModel)]=\"dadosLogin.senha.valor\" (change)=\"verificaSenha()\">\r\n                        <app-mensagem-erro-input *ngIf=\"dadosLogin.senha.estado === false\" mensagemDeErro=\"{{dadosLogin.senha.mensagem}}\"></app-mensagem-erro-input>\r\n                      </div>\r\n                    </li>\r\n                    <li>\r\n                      <div class=\"btn\">\r\n                        <button name=\"button\" class=\"btn btn-primary btn-entrar\" (click)=\"entrar(); $event.stopPropagation()\">Entrar</button>\r\n                      </div>\r\n                    </li>\r\n                  </form>\r\n                </ul>\r\n              </div>\r\n            </li>\r\n            <li>\r\n              <div class=\"btn-group btn-cadastro\">\r\n                <button *ngIf=\"router.url !== '/cadastro'\" class=\"btn btn-primary btn-sm dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                  Cadastre-se <span class=\"caret\"></span>\r\n                </button>\r\n                <ul *ngIf=\"router.url !== '/cadastro'\" class=\"dropdown-menu\">\r\n                  <li><a (click)=\"cadastrarUsuario()\" routerLink=\"/cadastro\">Cadastre-se como cliente</a></li>\r\n                  <li role=\"separator\" class=\"divider\"></li>\r\n                  <li><a (click)=\"cadastrarArtesao()\" routerLink=\"/cadastro\">Cadastre-se como artesão</a></li>\r\n                </ul>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ 242:
/***/ (function(module, exports) {

module.exports = "<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n    <div id=\"logo\" [class.cadastro]=\"formShow\" (click)=\"hideForm('close')\">\r\n        <h1>Quixique</h1>\r\n            <app-form-cadastro-start class=\"form\" (closeForm)=\"hideForm($event)\"></app-form-cadastro-start>            \r\n        <a class=\"btn btn-primary btn-lg\" (click)=\"showForm()\">Entre ou Cadastre-se</a>\r\n    </div>\r\n    <!-- Indicators -->\r\n    <!--<ol class=\"carousel-indicators\">\r\n        <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n        <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n        <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n        <li data-target=\"#myCarousel\" data-slide-to=\"3\"></li>\r\n    </ol>-->\r\n\r\n    <!-- Wrapper for slides -->\r\n    <div class=\"carousel-inner\">\r\n        <div class=\"item active\">\r\n            <!--<img src=\"../../../assets/images/temp/pp.jpg\" alt=\"Los Angeles\">-->\r\n            <div class=\"img PB-01\"></div>\r\n            <!--<div *ngIf=\"formShow == false\" class=\"carousel-caption\">\r\n              <h3>Bla Lorem impsum Dolar...</h3>\r\n              <p>\r\n                Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n              </p>\r\n            </div>-->\r\n        </div>\r\n        <div class=\"item\">\r\n            <!--<img src=\"../../../assets/images/temp/a.png\" alt=\"Chicago\">-->\r\n            <div class=\"img PB-02\"></div>\r\n            <!--<div *ngIf=\"formShow == false\" class=\"carousel-caption\">\r\n              <h3>Bla Lorem impsum Dolar...</h3>\r\n              <p>\r\n                Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n              </p>\r\n            </div>-->\r\n        </div>\r\n\r\n        <div class=\"item\">\r\n            <!--<img src=\"../../../assets/images/temp/a.png\" alt=\"New York\">-->\r\n            <div class=\"img PB-03\"></div>\r\n            <!--<div *ngIf=\"formShow == false\" class=\"carousel-caption\">\r\n              <h3>Bla Lorem impsum Dolar...</h3>\r\n              <p>\r\n                Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n              </p>\r\n            </div>            -->\r\n        </div>\r\n        <div class=\"item\">\r\n            <!--<img src=\"../../../assets/images/temp/a.png\" alt=\"New York\">-->\r\n            <div class=\"img PB-04\"></div>\r\n            <!--<div *ngIf=\"formShow == false\" class=\"carousel-caption\">\r\n              <h3>Bla Lorem impsum Dolar...</h3>\r\n              <p>\r\n                Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n              </p>\r\n            </div>            -->\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Left and right controls -->\r\n    <!--<a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\r\n        <span class=\"setae\"><img src=\"../../../assets/images/temp/se.png\" alt=\"\"/></span>\r\n        <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\r\n        <span class=\"setad\"><img src=\"../../../assets/images/temp/sd.png\" alt=\"\"/></span>\r\n        <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Next</span>\r\n    </a>-->\r\n</div>\r\n<div id=\"infografico\">\r\n        <div id=\"myCarousel2\" class=\"carousel slide\" data-ride=\"carousel\">\r\n            <!-- Indicators -->\r\n            <ol class=\"carousel-indicators\">\r\n                <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n                <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n                <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n                <li data-target=\"#myCarousel\" data-slide-to=\"3\"></li>\r\n            </ol>\r\n\r\n            <!-- Wrapper for slides -->\r\n            <div class=\"carousel-inner\">\r\n                <div class=\"item active\">\r\n                    <!--<img src=\"../../../assets/images/temp/pp.jpg\" alt=\"Los Angeles\">-->\r\n                    <div class=\"img i03\"></div>\r\n                    <!--<div *ngIf=\"formShow == false\" class=\"carousel-caption\">\r\n                    <h3>Bla Lorem impsum Dolar...</h3>\r\n                    <p>\r\n                        Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                        Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                        Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                        Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                        Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                        Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                        Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                        Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                        Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                    </p>\r\n                    </div>-->\r\n                </div>\r\n                <div class=\"item\">\r\n                    <!--<img src=\"../../../assets/images/temp/a.png\" alt=\"Chicago\">-->\r\n                    <div class=\"img i04\"></div>\r\n                    <!--<div *ngIf=\"formShow == false\" class=\"carousel-caption\">\r\n                    <h3>Bla Lorem impsum Dolar...</h3>\r\n                    <p>\r\n                        Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                        Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                        Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                        Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                        Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                        Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                        Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                        Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                        Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                    </p>\r\n                    </div>-->\r\n                </div>\r\n\r\n                <div class=\"item\">\r\n                    <!--<img src=\"../../../assets/images/temp/a.png\" alt=\"New York\">-->\r\n                    <div class=\"img i01\"></div>\r\n                    <!--<div *ngIf=\"formShow == false\" class=\"carousel-caption\">\r\n                    <h3>Bla Lorem impsum Dolar...</h3>\r\n                    <p>\r\n                        Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                        Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                        Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                        Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                        Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                        Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                        Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                        Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                        Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                    </p>\r\n                    </div>            -->\r\n                </div>\r\n                <div class=\"item\">\r\n                    <!--<img src=\"../../../assets/images/temp/a.png\" alt=\"New York\">-->\r\n                    <div class=\"img i02\"></div>\r\n                    <!--<div *ngIf=\"formShow == false\" class=\"carousel-caption\">\r\n                    <h3>Bla Lorem impsum Dolar...</h3>\r\n                    <p>\r\n                        Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                        Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                        Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                        Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                        Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                        Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                        Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                        Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                        Bla Lorem impsum Dolar seat amet Bla Lorem impsum Dolar seat amet\r\n                    </p>\r\n                    </div>            -->\r\n                </div>\r\n            </div>\r\n\r\n            <!-- Left and right controls -->\r\n            <a class=\"left carousel-control\" href=\"#myCarousel2\" data-slide=\"prev\">\r\n                <!--<span class=\"setae\"><img src=\"../../../assets/images/temp/se.png\" alt=\"\"/></span>-->\r\n                <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\r\n                <span class=\"sr-only\">Previous</span>\r\n            </a>\r\n            <a class=\"right carousel-control\" href=\"#myCarousel2\" data-slide=\"next\">\r\n                <!--<span class=\"setad\"><img src=\"../../../assets/images/temp/sd.png\" alt=\"\"/></span>-->\r\n                <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\r\n                <span class=\"sr-only\">Next</span>\r\n            </a>\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ 243:
/***/ (function(module, exports) {

module.exports = "<div class=\"container component\">\r\n    <div class=\"container searchBar\">\r\n        <h1 id=\"logo\" class=\"col-sm-offset-4 col-sm-4\">Quixique</h1>\r\n        <div class=\"col-md-offset-3 col-md-6 col-md-offset-3\">\r\n            <h1>O que você procura?</h1>\r\n        </div>\r\n        <div class=\"input-group col-md-offset-3 col-md-6 col-md-offset-3\">\r\n            <!--<span class=\"input-group-addon\">$</span>-->\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"O que deseja encontrar ?\">\r\n            <span class=\"input-group-btn\">\r\n                <button class=\"btn btn-primary\" type=\"button\"><span class=\"glyphicon glyphicon-search\" aria-hidden=\"true\"></span></button>\r\n            </span>\r\n        </div>\r\n    </div>\r\n    <div class=\"categories\">\r\n        <app-category-thumbnail *ngFor=\"let category of categories\" [category]=\"category\"></app-category-thumbnail>        \r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 244:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-6 col-md-4 component\">\r\n    <div class=\"thumbnail container-object-fit\">\r\n        <div class=\"filtro caption\">\r\n            <div class=\"caption\">\r\n                <h1>{{category.nome}}</h1>\r\n                <h4>{{category.descricao}}</h4>\r\n            </div>\r\n        </div>\r\n        <img class=\"item-object-fit\" src=\"../../../assets/images/components/categorie-thumbnail/{{category.src}}\" alt=\"...\">\r\n        <!--<div class=\"img\" style='background-image: url(\"../../../../assets/images/components/categorie-thumbnail/img-01.jpg\")'></div>-->\r\n    </div>\r\n</div>\r\n\r\n<script>\r\n    alert('é nois');\r\n    $(function(){\r\n        // this\r\n        $('.container-object-fit').find('.item-object-fit').each(function() {\r\n            var itemClass;\r\n            var imgAspectRatio = $(this).innerWidth()/$(this).innerHeight();\r\n            // var imgAspectRatio = this.width/this.height; não funciona com videos\r\n\r\n            $('.container-object-fit').each(function(){\r\n                var containerAspectRatio = $(this).innerWidth()/$(this).innerHeight();\r\n                if(imgAspectRatio > containerAspectRatio){\r\n                    itemClass = 'tall';\r\n                }else{\r\n                    itemClass = 'wide';                                    \r\n                }\r\n            });\r\n            $(this).addClass(itemClass);\r\n        })\r\n    });\r\n</script>"

/***/ }),

/***/ 245:
/***/ (function(module, exports) {

module.exports = "<footer class=\"local\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"container\">\r\n        <div class=\"col-md-5\">\r\n          <h1>Queremos você sempre conosco</h1>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-5\">\r\n      <div id=\"map\"></div>\r\n    </div>\r\n    <div class=\"info col-md-6\">\r\n      <div class=\"more\">\r\n        <h2>\r\n          Saiba Mais\r\n        </h2>\r\n        <h4>\r\n          <a> Como comprar </a>\r\n        </h4>\r\n        <h4>\r\n          <a> Quero abrir minha loja </a>\r\n        </h4>\r\n        <h4>\r\n          <a> Pagamento seguro </a>\r\n        </h4>\r\n        <h4>\r\n          <a> Política de Privacidade </a>\r\n        </h4>\r\n      </div>\r\n      <div class=\"endereco\">\r\n        <h4>Associação artesãos de Quixadá</h4>\r\n        <h4>CNPJ 05.845.791/0001-74 - R.Pres. Vargas, 2320</h4>\r\n        <h4>Centro, Quixadá - CE 63900-000</h4>\r\n      </div>\r\n    </div>\r\n    <div class=\"social col-md-1\">\r\n      <div class=\"row\"><a href=\"https://www.facebook.com\" target=\"_blank\"><img src=\"..\\..\\assets\\images\\footer\\facebook-logo.svg\" alt=\"\"></a></div>\r\n      <div class=\"row\"><a href=\"https://www.instagram.com\" target=\"_blank\"><img src=\"..\\..\\assets\\images\\footer\\instagram-photo-camera-symbol.svg\" alt=\"\"></a></div>\r\n      <div class=\"row\"><a href=\"https://br.pinterest.com\" target=\"_blank\"><img src=\"..\\..\\assets\\images\\footer\\pinterest-circular-logo-symbol.svg\" alt=\"\"></a></div>\r\n      <div class=\"row\"><a href=\"https://twitter.com\" target=\"_blank\"><img src=\"..\\..\\assets\\images\\footer\\twitter-black-shape.svg\" alt=\"\"></a></div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n<footer class=\"newsletter\">\r\n  <div class=\"container\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-10\">\r\n            <h2>Receba novidades no seu email</h2>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <form action=\"/action_page.php\" class=\"col-md-10\">\r\n          <div class=\"input-group\">\r\n              <!--<span class=\"input-group-addon\">$</span>-->\r\n              <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"mariascarlet@exemplo.com.br\">\r\n              <span class=\"input-group-btn\">\r\n                  <button class=\"btn btn-primary\" type=\"button\">Assinar</button>\r\n              </span>\r\n          </div>\r\n          <div class=\"col-md-1\"></div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <h2>parcelamos em <strong>até 12x</strong> nos crtões:</h2>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-12\">\r\n        <img class=\"card\" src=\"..\\..\\assets\\images\\footer\\bandeiras_cartoes.png\" alt=\"\">\r\n      </div>   \r\n    </div>\r\n  </div>\r\n</footer>\r\n<div class=\"line\"></div>"

/***/ }),

/***/ 246:
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"modal\" (click)=\"close($event)\" style=\"display:block\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n            <h4 class=\"modal-title\">Modal title</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <p>One fine body…</p>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button id=\"close\" (click)=\"close($event)\" type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n            <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n        </div>\r\n        </div>\r\n    </div>\r\n</div>-->\r\n<!--<div class=\"component\">-->\r\n    <div class=\"formCadastro\" (click)=\"close('')\">\r\n        <button (click)=\"close('close')\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <form>\r\n            <h1>Bem Vindo! :)</h1>\r\n            <fieldset>\r\n                <div class=\"form-group\">\r\n                    <label for=\"exampleInputEmail1\">Endereço de email</label>\r\n                    <input #email type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Informe o seu endereço de email\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"exampleInputPassword1\">Senha</label>\r\n                    <input #senha type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Insira uma senha no mínimo 8 digitos\">\r\n                </div>\r\n                <div class=\"radio\">\r\n                    <label>\r\n                    <input type=\"radio\" name=\"user-type\" value=\"cliente\" (click)=\"cadastrarUsuario($event.target.value)\"> Cliente\r\n                    </label>\r\n                    <label>\r\n                    <input  type=\"radio\" name=\"user-type\" value=\"artesao\" (click)=\"cadastrarUsuario($event.target.value)\"> Artesão\r\n                    </label>\r\n                     \r\n                    \r\n                </div>\r\n                <div class=\"pull-right\">\r\n                    <div class=\"btn-group btn-entrar\">\r\n                        <button routerLink=\"/cadastro\" class=\"btn btn-default btn-md\" type=\"button\">\r\n                            Entrar\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"btn-group btn-cadastro\">\r\n                        <button routerLink=\"/cadastro\" (click)=\"guardarDados({'email':email.value, 'senha':senha.value})\" class=\"btn btn-primary btn-md\" type=\"button\">\r\n                            Cadastre-se\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </fieldset>\r\n        </form>\r\n    </div> \r\n<!--</div>-->\r\n"

/***/ }),

/***/ 247:
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\r\n  <div class=\"container\">\r\n    <!--<div class=\"row\">-->\r\n      <div class=\"col-md-3\">\r\n        <div class=\"page-header\">\r\n          <a routerLink=\"/inicio\" href=\"#\">\r\n            <h1>Quixique</h1>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <!--<div class=\"form-group\">-->\r\n          <div class=\"input-group\">\r\n            <!--<span class=\"input-group-addon\">$</span>-->\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"O que deseja encontrar ?\">\r\n            <span class=\"input-group-btn\">\r\n                <button class=\"btn btn-default\" type=\"button\"><span class=\"glyphicon glyphicon-search\" aria-hidden=\"true\"></span></button>\r\n            </span>\r\n          </div>\r\n        <!--</div>-->\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <small>\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li>\r\n                    <div class=\"btn-group btn-entrar-dropdown\">\r\n                        <button class=\"btn btn-default btn-md dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                            Entrar <span class=\"caret\"></span>\r\n                        </button>\r\n                        <ul class=\"dropdown-menu\">\r\n                            <form class=\"\" >\r\n                                <li>\r\n                                    <div class=\"input-group input\">\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Email\" aria-describedby=\"basic-addon1\">\r\n                                    </div>\r\n                                </li>\r\n                                <li>\r\n                                    <div class=\"input-group input\">\r\n                                        <input type=\"password\" class=\"form-control\" placeholder=\"Senha\" aria-describedby=\"basic-addon1\">\r\n                                    </div>\r\n                                </li>\r\n                                <li>\r\n                                    <div class=\"btn\">\r\n                                        <button type=\"submit\" name=\"button\" class=\"btn btn-primary btn-entrar\">Entrar</button>\r\n                                    </div>\r\n                                </li>\r\n                            </form>\r\n                        </ul>\r\n                    </div>\r\n                </li>\r\n                <li>\r\n                    <div class=\"btn-group btn-cadastro\">\r\n                        <button class=\"btn btn-primary btn-md dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                            Cadastre-se <span class=\"caret\"></span>\r\n                        </button>\r\n                        <ul class=\"dropdown-menu\">\r\n                            <li><a (click)=\"cadastrarCliente()\" routerLink=\"/cadastro\">Cadastre-se como cliente</a></li>\r\n                            <li role=\"separator\" class=\"divider\"></li>\r\n                            <li><a (click)=\"cadastrarArtesao()\" routerLink=\"/cadastro\">Cadastre-se como artesão</a></li>\r\n                        </ul>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </small>\r\n      </div>\r\n    <!--</div>-->\r\n  </div>\r\n</header>"

/***/ }),

/***/ 248:
/***/ (function(module, exports) {

module.exports = "<app-carrossel></app-carrossel>\r\n<app-navbar-start></app-navbar-start>\r\n<app-categories></app-categories>\r\n<app-footer></app-footer>"

/***/ }),

/***/ 249:
/***/ (function(module, exports) {

module.exports = "<div class=\"container container-principal\">\r\n  <div class=\"row guias-container\">\r\n    <div class=\"col-md-8\">\r\n      <div class=\"btn-group btn-group-justified\" role=\"group\" aria-label=\"...\">\r\n        <div class=\"btn-group\" role=\"group\">\r\n          <button type=\"button\" class=\"btn btn-default btn-select\">Encomendas</button>\r\n        </div>\r\n        <div class=\"btn-group\" role=\"group\">\r\n          <button type=\"button\" class=\"btn btn-default\">Em produção</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <div class=\"controle-container\">\r\n        <ul>\r\n          <li>\r\n            <span class=\"grade\" (click)='mudarVisualizacao()'><div class=\"glyphicon glyphicon-th-large\"></div></span>\r\n          </li>\r\n          <!-- <li>\r\n            <span class=\"lista\"><div class=\"glyphicon glyphicon-th-list\"></div></span>\r\n          </li> -->\r\n          <li>\r\n            <span class=\"options\"><div class=\" glyphicon glyphicon-option-vertical\"></div></span>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <app-card-pedido-grande></app-card-pedido-grande>\r\n  <app-card-pedido-pequeno></app-card-pedido-pequeno>\r\n</div>\r\n"

/***/ }),

/***/ 250:
/***/ (function(module, exports) {

module.exports = "<div class=\"termos-container\">\r\n  <h5>Para finalizar seu cadastro, é necessário aceitar os termos de uso do Quixique.</h5>\r\n  <div *ngIf=\"userType == 'artesao'\" class=\"termos\">\r\n    <p>TERMOS DE USO (ARTESÃO)</p>\r\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacus lacus, tempor et laoreet ut, dignissim gravida enim. Praesent nulla justo, vulputate ac dolor vel, hendrerit bibendum magna. Fusce non eleifend nisi. Vestibulum sit amet justo malesuada turpis fermentum dictum. Vestibulum ut quam facilisis, cursus ligula a, luctus erat. Nullam facilisis accumsan tincidunt. Morbi maximus ultrices est sed porta. Integer pharetra aliquet arcu sit amet rutrum. Integer a libero lectus. Sed vel blandit urna, varius congue nisi. In dignissim accumsan lacus, et convallis odio elementum ut. Aliquam erat volutpat.</p>\r\n    <p>Nam justo felis, egestas eget mollis quis, sollicitudin nec mauris. Nulla vel sapien eu eros posuere sodales. Mauris feugiat ex id massa aliquet ultricies. Pellentesque sit amet ex ullamcorper, tincidunt dolor vel, rutrum leo. Phasellus lobortis dapibus mattis. Nunc est ligula, imperdiet at elit vitae, interdum elementum nisi. Aliquam molestie magna eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec vehicula nibh a tellus ornare, eget ultrices elit commodo. Ut lorem eros, commodo ac varius ut, malesuada sed turpis. Praesent vehicula, eros ut commodo elementum, magna augue imperdiet ex, tincidunt accumsan odio dolor id odio. Donec luctus leo id mauris auctor, sit amet venenatis nulla commodo. Ut pulvinar eros justo, eu laoreet tortor pretium sit amet. Mauris sit amet cursus diam.</p>\r\n  </div>\r\n  <div *ngIf=\"userType == 'cliente'\" class=\"termos\">\r\n    <p>TERMOS DE USO (CLIENTE)</p>\r\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacus lacus, tempor et laoreet ut, dignissim gravida enim. Praesent nulla justo, vulputate ac dolor vel, hendrerit bibendum magna. Fusce non eleifend nisi. Vestibulum sit amet justo malesuada turpis fermentum dictum. Vestibulum ut quam facilisis, cursus ligula a, luctus erat. Nullam facilisis accumsan tincidunt. Morbi maximus ultrices est sed porta. Integer pharetra aliquet arcu sit amet rutrum. Integer a libero lectus. Sed vel blandit urna, varius congue nisi. In dignissim accumsan lacus, et convallis odio elementum ut. Aliquam erat volutpat.</p>\r\n    <p>Nam justo felis, egestas eget mollis quis, sollicitudin nec mauris. Nulla vel sapien eu eros posuere sodales. Mauris feugiat ex id massa aliquet ultricies. Pellentesque sit amet ex ullamcorper, tincidunt dolor vel, rutrum leo. Phasellus lobortis dapibus mattis. Nunc est ligula, imperdiet at elit vitae, interdum elementum nisi. Aliquam molestie magna eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec vehicula nibh a tellus ornare, eget ultrices elit commodo. Ut lorem eros, commodo ac varius ut, malesuada sed turpis. Praesent vehicula, eros ut commodo elementum, magna augue imperdiet ex, tincidunt accumsan odio dolor id odio. Donec luctus leo id mauris auctor, sit amet venenatis nulla commodo. Ut pulvinar eros justo, eu laoreet tortor pretium sit amet. Mauris sit amet cursus diam.</p>\r\n  </div>\r\n  <div class=\"checkbox\">\r\n    <label>\r\n      <input type=\"checkbox\" [(ngModel)]=\"confirmacaoTermos\" (click)=\"confirmaTermos()\"> Concordo com os termos de uso.\r\n    </label>\r\n    <app-mensagem-erro-input *ngIf=\"confirmacaoTermos === false\" mensagemDeErro=\"Para concluir o cadastro, é necessário concordar com os termos\"></app-mensagem-erro-input>\r\n  </div>\r\n  <div class=\"col-md-12\" text-center>\r\n    <button class=\"btn btn-primary center-block\" [class.disabled]=\"formSubmitted\" (click)=\"cadastrar()\">Concluir cadastro</button>\r\n  </div>\r\n</div>\r\n<div class=\"modal\" [class.show]=\"cadastroFinalizado\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n       <!--  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button> -->\r\n        <h4 class=\"modal-title\">Cadastro realizado com sucesso!</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>Enviamos um e-mail para {{ userMail }} com um link de confirmação.</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n<!--         <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button> -->\r\n        <button type=\"button\" class=\"btn btn-primary\" routerLink=\"/\">Fechar</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RequestService = (function () {
    function RequestService(http) {
        this.http = http;
    }
    RequestService.prototype.post = function (url, dados) {
        return this.http.post(url, dados)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error); });
    };
    ;
    RequestService.prototype.get = function (url) {
        return this.http.get(url)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error); });
    };
    ;
    return RequestService;
}());
RequestService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], RequestService);

var _a;
//# sourceMappingURL=request.service.js.map

/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "01.f476e05c1263e1e0a1ea.jpg";

/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "02.7bfabd2d356ff6df1c73.jpg";

/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "03.c3410c61ae685ee712e7.png";

/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "04.c133200f86b8a7483f93.jpg";

/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "PB-01.02ebc3f5d599eee674bd.jpg";

/***/ }),

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "PB-02.d548ccbf008e2e7c130b.jpg";

/***/ }),

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "PB-03.40ebebbc49d53c04c327.png";

/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "PB-04.7e318bdbeed695c71f36.jpg";

/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(144);


/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDataHandlerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserDataHandlerService = (function () {
    function UserDataHandlerService() {
    }
    UserDataHandlerService.prototype.newArtesao = function () {
        var model = { tipo: "artesao", nome: undefined, cpf: undefined, dataDeNascimento: undefined, naturalidade: undefined, email: undefined, celular: undefined, telefone: undefined,
            nomeComercial: undefined, categoria: undefined, descricao: undefined, cep: undefined, rua: undefined, numero: undefined, complemento: undefined, bairro: undefined, cidade: undefined, estado: undefined,
            numeroCartao: undefined, vencimentoCartao: undefined, titularCartao: undefined,
            nomeDeUsuario: undefined, senha: undefined, linkPaginaWeb: undefined };
        return model;
    };
    ;
    UserDataHandlerService.prototype.newArtesaoVerifiers = function () {
        var verifiers = { nome: { estado: undefined, mensagem: "" }, cpf: { estado: undefined, mensagem: "" }, dataDeNascimento: { estado: undefined, mensagem: "" }, naturalidade: { estado: undefined, mensagem: "" }, email: { estado: undefined, mensagem: "" }, celular: { estado: undefined, mensagem: "" }, telefone: { estado: true, mensagem: "" },
            nomeComercial: { estado: undefined, mensagem: "" }, categoria: { estado: undefined, mensagem: "" }, descricao: { estado: undefined, mensagem: "" }, cep: { estado: undefined, mensagem: "" }, rua: { estado: undefined, mensagem: "" }, numero: { estado: true, mensagem: "" }, complemento: { estado: true, mensagem: "" }, bairro: { estado: undefined, mensagem: "" }, cidade: { estado: undefined, mensagem: "" }, estado: { estado: undefined, mensagem: "" },
            numeroCartao: { estado: true, mensagem: "" }, vencimentoCartao: { estado: true, mensagem: "" }, titularCartao: { estado: true, mensagem: "" },
            nomeDeUsuario: { estado: undefined, mensagem: "" }, senha: { estado: undefined, mensagem: "" }, confirmacaoSenha: { estado: undefined, mensagem: "" }, linkPaginaWeb: { estado: true, mensagem: "" } };
        return verifiers;
    };
    ;
    UserDataHandlerService.prototype.newCliente = function () {
        var model = { tipo: "cliente", nome: undefined, dataDeNascimento: undefined, cpf: undefined, email: undefined, celular: undefined,
            cep: undefined, rua: undefined, numero: undefined, complemento: undefined, bairro: undefined, cidade: undefined, estado: undefined };
        return model;
    };
    ;
    UserDataHandlerService.prototype.newClienteVerifiers = function () {
        var verifiers = { nome: { estado: undefined, mensagem: "" }, dataDeNascimento: { estado: undefined, mensagem: "" }, cpf: { estado: undefined, mensagem: "" }, email: { estado: undefined, mensagem: "" }, celular: { estado: undefined, mensagem: "" },
            cep: { estado: undefined, mensagem: "" }, rua: { estado: true, mensagem: "" }, numero: { estado: undefined, mensagem: "" }, complemento: { estado: undefined, mensagem: "" }, bairro: { estado: undefined, mensagem: "" }, cidade: { estado: undefined, mensagem: "" }, estado: { estado: undefined, mensagem: "" },
            nomeDeUsuario: { estado: undefined, mensagem: "" }, senha: { estado: undefined, mensagem: "" }, confirmacaoSenha: { estado: undefined, mensagem: "" } };
        return verifiers;
    };
    ;
    return UserDataHandlerService;
}());
UserDataHandlerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], UserDataHandlerService);

//# sourceMappingURL=user-data-handler.service.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_request_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_data_handler_service__ = __webpack_require__(60);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormCadastroComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormCadastroComponent = (function () {
    function FormCadastroComponent(requestService, router, userDataHandler) {
        this.requestService = requestService;
        this.router = router;
        this.userDataHandler = userDataHandler;
        this.pageCount = 0;
        this.confirmacaoSenha = undefined;
        this.mensagemCampoVazio = "Por favor, preencha este campo";
        this.mensagemSomenteNumeros = "Somente números são permitidos";
        this.cpfMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
        this.dateMask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
        this.phoneMask = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.cellphoneMask = ['(', /\d/, /\d/, ')', ' ', /9/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.cepMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
        this.cardNumberMask = [/\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/];
        this.cardEnd = [/\d/, /\d/, '/', /\d/, /\d/];
    }
    FormCadastroComponent.prototype.previous = function () {
        if (this.pageCount > 0) {
            this.pageCount -= 1;
        }
        ;
    };
    ;
    FormCadastroComponent.prototype.next = function () {
        if (this.formularioOk()) {
            if (this.pageCount < 4) {
                this.pageCount += 1;
            }
            ;
            if (this.pageCount == 2 && this.tipoDeUsuario == 'cliente') {
                this.userDataHandler.newUserData = this.novoUsuario;
            }
            else if (this.pageCount == 3 && this.tipoDeUsuario == 'artesao') {
                this.userDataHandler.newUserData = this.novoUsuario;
            }
            ;
        }
        ;
    };
    ;
    FormCadastroComponent.prototype.controleVerificadores = function (identificador, mensagem) {
        identificador.estado = false;
        identificador.mensagem = mensagem;
    };
    FormCadastroComponent.prototype.verificaNome = function () {
        if (!(/\S/.test(this.novoUsuario.nome)) || this.novoUsuario.nome == null) {
            this.controleVerificadores(this.verificadores.nome, this.mensagemCampoVazio);
        }
        else if (!(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ' ]+$/.test(this.novoUsuario.nome))) {
            this.controleVerificadores(this.verificadores.nome, "Números e caracteres especiais não são permitidos nesse campo");
        }
        else if (!(/([a-zA-Z]+\s?\b){2,}/g.test(this.novoUsuario.nome))) {
            this.controleVerificadores(this.verificadores.nome, "Insira seu nome completo");
        }
        else {
            this.verificadores.nome.estado = true;
        }
        ;
    };
    ;
    FormCadastroComponent.prototype.verificaCPF = function () {
        if (!(/\S/.test(this.novoUsuario.cpf)) || this.novoUsuario.cpf == undefined) {
            this.controleVerificadores(this.verificadores.cpf, this.mensagemCampoVazio);
        }
        else if (this.novoUsuario.cpf.length !== 15 || !(+(this.novoUsuario.cpf))) {
            this.controleVerificadores(this.verificadores.cpf, "Insira um CPF válido");
        }
        else {
            this.verificadores.cpf.estado = true;
        }
        ;
    };
    ;
    FormCadastroComponent.prototype.verificaDataDeNascimento = function () {
        if (!(/\S/.test(this.novoUsuario.dataDeNascimento)) || this.novoUsuario.dataDeNascimento == undefined) {
            this.controleVerificadores(this.verificadores.dataDeNascimento, this.mensagemCampoVazio);
        }
        else if (this.novoUsuario.dataDeNascimento == "" || !(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(this.novoUsuario.dataDeNascimento))) {
            this.controleVerificadores(this.verificadores.dataDeNascimento, "Insira uma data válida");
        }
        else {
            this.verificadores.dataDeNascimento.estado = true;
        }
        ;
    };
    ;
    FormCadastroComponent.prototype.verificaNaturalidade = function () {
        if (!(/\S/.test(this.novoUsuario.naturalidade)) || this.novoUsuario.naturalidade == undefined) {
            this.controleVerificadores(this.verificadores.naturalidade, this.mensagemCampoVazio);
        }
        else if (!(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/.test(this.novoUsuario.naturalidade))) {
            this.controleVerificadores(this.verificadores.naturalidade, "Não são permitidos números nesse campo");
        }
        else {
            this.verificadores.naturalidade.estado = true;
        }
        ;
    };
    ;
    FormCadastroComponent.prototype.verificaEmail = function () {
        if (!(/\S/.test(this.novoUsuario.email)) || this.novoUsuario.email == undefined) {
            this.controleVerificadores(this.verificadores.email, this.mensagemCampoVazio);
        }
        else if (!(/\S+@\S+\.\S+/.test(this.novoUsuario.email))) {
            this.controleVerificadores(this.verificadores.email, "Insira um e-mail válido");
        }
        else {
            this.verificadores.email.estado = true;
        }
        ;
    };
    ;
    FormCadastroComponent.prototype.verificaTelefone = function () {
        if (!(/\S/.test(this.novoUsuario.telefone)) || this.novoUsuario.telefone == undefined) {
            this.controleVerificadores(this.verificadores.telefone, this.mensagemCampoVazio);
        }
        else if (!(/^\((\d{2})\)?(\d{4,5}\-?\d{4})$/.test(this.novoUsuario.telefone))) {
            this.controleVerificadores(this.verificadores.telefone, "Insira um telefone válido");
        }
        else {
            this.verificadores.telefone.estado = true;
        }
        ;
    };
    ;
    FormCadastroComponent.prototype.verificaCelular = function () {
        if (!(/\S/.test(this.novoUsuario.celular)) || this.novoUsuario.celular == undefined) {
            this.controleVerificadores(this.verificadores.celular, this.mensagemCampoVazio);
        }
        else if (!(/^\((\d{2})\)?(\d{4,5}\-?\d{4})$/.test(this.novoUsuario.telefone))) {
            this.controleVerificadores(this.verificadores.celular, "Insira um telefone válido");
        }
        else {
            this.verificadores.celular.estado = true;
        }
        ;
    };
    ;
    FormCadastroComponent.prototype.verificaNomeComercial = function () {
        if (!(/\S/.test(this.novoUsuario.nomeComercial)) || this.novoUsuario.nomeComercial == undefined) {
            this.controleVerificadores(this.verificadores.nomeComercial, this.mensagemCampoVazio);
        }
        else {
            this.verificadores.nomeComercial.estado = true;
        }
        ;
    };
    ;
    FormCadastroComponent.prototype.verificaCategoria = function () {
        if (this.novoUsuario.categoria == undefined || this.novoUsuario.categoria == 0) {
            this.controleVerificadores(this.verificadores.categoria, "Selecione uma categoria");
        }
        else {
            this.verificadores.categoria.estado = true;
        }
        ;
    };
    ;
    FormCadastroComponent.prototype.verificaDescricao = function () {
        if (!(/\S/.test(this.novoUsuario.descricao)) || this.novoUsuario.descricao == undefined) {
            this.controleVerificadores(this.verificadores.descricao, this.mensagemCampoVazio);
        }
        else {
            this.verificadores.descricao.estado = true;
        }
        ;
    };
    ;
    FormCadastroComponent.prototype.verificaCep = function () {
        if (!(/\S/.test(this.novoUsuario.cep)) || this.novoUsuario.cep == undefined) {
            this.controleVerificadores(this.verificadores.cep, this.mensagemCampoVazio);
        }
        else if (this.novoUsuario.cep.length !== 9 || (/\d\S{5}[-]\\d\S{2}/.test(this.novoUsuario.cep))) {
            this.controleVerificadores(this.verificadores.cep, "Insira um CEP válido");
        }
        else {
            this.verificadores.cep.estado = true;
        }
        ;
    };
    ;
    FormCadastroComponent.prototype.verificaRua = function () {
        if (!(/\S/.test(this.novoUsuario.rua)) || this.novoUsuario.rua == undefined) {
            this.controleVerificadores(this.verificadores.rua, this.mensagemCampoVazio);
        }
        else {
            this.verificadores.rua.estado = true;
        }
        ;
    };
    ;
    FormCadastroComponent.prototype.verificaNumero = function () {
        if (!(/\S/.test(this.novoUsuario.numero)) || this.novoUsuario.numero == undefined) {
            this.controleVerificadores(this.verificadores.numero, this.mensagemCampoVazio);
        }
        else if (!(/^\d+$/.test(this.novoUsuario.numero))) {
            this.controleVerificadores(this.verificadores.numero, "Somente números são permitidos aqui");
        }
        else {
            this.verificadores.numero.estado = true;
        }
        ;
    };
    ;
    FormCadastroComponent.prototype.verificaComplemento = function () {
        if (this.novoUsuario.complemento !== undefined) {
            if (!(/\S/.test(this.novoUsuario.complemento)) || this.novoUsuario.complemento == undefined) {
                this.controleVerificadores(this.verificadores.complemento, this.mensagemCampoVazio);
            }
            else {
                this.verificadores.complemento.estado = true;
            }
            ;
        }
    };
    ;
    FormCadastroComponent.prototype.verificaBairro = function () {
        if (!(/\S/.test(this.novoUsuario.bairro)) || this.novoUsuario.bairro == undefined) {
            this.controleVerificadores(this.verificadores.bairro, this.mensagemCampoVazio);
        }
        else {
            this.verificadores.bairro.estado = true;
        }
        ;
    };
    ;
    FormCadastroComponent.prototype.verificaCidade = function () {
        if (!(/\S/.test(this.novoUsuario.cidade)) || this.novoUsuario.cidade == undefined) {
            this.controleVerificadores(this.verificadores.cidade, this.mensagemCampoVazio);
        }
        else if (/^\d+$/.test(this.novoUsuario.cidade)) {
            this.controleVerificadores(this.verificadores.cidade, "Números não são permitidos aqui");
        }
        else {
            this.verificadores.cidade.estado = true;
        }
        ;
    };
    ;
    FormCadastroComponent.prototype.verificaEstado = function () {
        if (!(/\S/.test(this.novoUsuario.estado)) || this.novoUsuario.estado == undefined) {
            this.controleVerificadores(this.verificadores.estado, this.mensagemCampoVazio);
        }
        else if (/^\d+$/.test(this.novoUsuario.estado)) {
            this.controleVerificadores(this.verificadores.estado, "Números não são permitidos aqui");
        }
        else {
            this.verificadores.estado.estado = true;
        }
        ;
    };
    ;
    FormCadastroComponent.prototype.verificaNumeroCartao = function () {
        if (this.novoUsuario.numeroCartao !== undefined) {
            if (!(/\S/.test(this.novoUsuario.numeroCartao)) || this.novoUsuario.numeroCartao == "") {
                this.controleVerificadores(this.verificadores.numeroCartao, this.mensagemCampoVazio);
            }
            else if (this.novoUsuario.numeroCartao.length < 16 || !(/^\d+$/.test(this.novoUsuario.numeroCartao))) {
                this.controleVerificadores(this.verificadores.numeroCartao, "Insira um número válido");
            }
            else {
                this.verificadores.numeroCartao.estado = true;
            }
            ;
        }
        ;
    };
    ;
    FormCadastroComponent.prototype.verificaVencimentoCartao = function () {
        if (this.novoUsuario.vencimentoCartao !== undefined) {
            if (!(/\S/.test(this.novoUsuario.vencimentoCartao)) || this.novoUsuario.vencimentoCartao == "") {
                this.controleVerificadores(this.verificadores.vencimentoCartao, this.mensagemCampoVazio);
            }
            else if (!(/[\d]{2}\/[\d]{4}/.test(this.novoUsuario.vencimentoCartao))) {
                this.controleVerificadores(this.verificadores.vencimentoCartao, "Insira uma data válida");
            }
            else {
                this.verificadores.vencimentoCartao.estado = true;
            }
            ;
        }
        ;
    };
    ;
    FormCadastroComponent.prototype.verificaTitularCartao = function () {
        if (this.novoUsuario.titularCartao !== undefined) {
            if (!(/\S/.test(this.novoUsuario.titularCartao)) || this.novoUsuario.titularCartao == undefined) {
                this.controleVerificadores(this.verificadores.titularCartao, this.mensagemCampoVazio);
            }
            else if (!(/([a-zA-Z]+\s?\b){2,}/g.test(this.novoUsuario.titularCartao))) {
                this.controleVerificadores(this.verificadores.titularCartao, "Insira o nome completo");
            }
            else {
                this.verificadores.titularCartao.estado = true;
            }
            ;
        }
        ;
    };
    ;
    FormCadastroComponent.prototype.verificaNomeDeUsuario = function () {
        if (this.novoUsuario.nomeDeUsuario !== undefined) {
            if (!(/\S/.test(this.novoUsuario.nomeDeUsuario))) {
                this.controleVerificadores(this.verificadores.nomeDeUsuario, this.mensagemCampoVazio);
            }
            else if (!(/^[a-zA-Z0-9_-]+$/.test(this.novoUsuario.nomeDeUsuario))) {
                this.controleVerificadores(this.verificadores.nomeDeUsuario, "Pode conter apenas letras, números, - e _");
            }
            else if (this.novoUsuario.nomeDeUsuario.length < 6) {
                this.controleVerificadores(this.verificadores.nomeDeUsuario, "O nome de usuário deve ter ao menos seis caracteres");
            }
            else {
                this.verificadores.nomeDeUsuario.estado = true;
            }
            ;
        }
        else {
            this.controleVerificadores(this.verificadores.nomeDeUsuario, this.mensagemCampoVazio);
        }
    };
    ;
    FormCadastroComponent.prototype.verificaSenha = function () {
        if (this.novoUsuario.senha !== undefined) {
            if (!(/\S/.test(this.novoUsuario.senha))) {
                this.controleVerificadores(this.verificadores.senha, this.mensagemCampoVazio);
            }
            else if (this.novoUsuario.senha.length < 6) {
                this.controleVerificadores(this.verificadores.senha, "A senha deve ter mais de seis caracteres");
            }
            else {
                this.verificadores.senha.estado = true;
            }
            ;
        }
        else {
            this.controleVerificadores(this.verificadores.senha, this.mensagemCampoVazio);
        }
    };
    ;
    FormCadastroComponent.prototype.verificaConfirmacaoSenha = function () {
        if (this.novoUsuario.senha !== this.confirmacaoSenha) {
            this.controleVerificadores(this.verificadores.confirmacaoSenha, "As senhas não conferem");
        }
        else {
            this.verificadores.confirmacaoSenha.estado = true;
        }
        ;
    };
    ;
    FormCadastroComponent.prototype.verificaLinkPaginaWeb = function () {
        if (this.novoUsuario.linkPaginaWeb !== undefined) {
            if (!(/https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,}/).test(this.novoUsuario.linkPaginaWeb)) {
                this.controleVerificadores(this.verificadores.linkPaginaWeb, "Digite um endereço válido");
            }
            else {
                this.verificadores.linkPaginaWeb.estado = true;
            }
            ;
        }
        ;
    };
    ;
    FormCadastroComponent.prototype.formularioOk = function () {
        var v = this.verificadores;
        if (this.tipoDeUsuario == "artesao") {
            if (this.pageCount == 0) {
                this.verificaNome();
                this.verificaCPF();
                this.verificaDataDeNascimento();
                this.verificaNaturalidade();
                this.verificaEmail();
                this.verificaTelefone();
                if (v.nome.estado && v.cpf.estado && v.dataDeNascimento.estado && v.naturalidade.estado && v.email.estado && v.telefone.estado) {
                    return true;
                }
                else {
                    return false;
                }
                ;
            }
            else if (this.pageCount == 1) {
                this.verificaNomeComercial();
                this.verificaCategoria();
                this.verificaDescricao();
                this.verificaCep();
                this.verificaRua();
                this.verificaNumero();
                this.verificaComplemento();
                this.verificaBairro();
                this.verificaCidade();
                this.verificaEstado();
                if (v.nomeComercial.estado && v.categoria.estado && v.descricao.estado && v.cep.estado && v.rua.estado && v.numero.estado && v.complemento.estado && v.bairro.estado && v.cidade.estado && v.estado.estado) {
                    return true;
                }
                else {
                    return false;
                }
                ;
            }
            else if (this.pageCount == 2) {
                this.verificaNumeroCartao();
                this.verificaVencimentoCartao();
                this.verificaTitularCartao();
                if (v.numeroCartao.estado && v.vencimentoCartao.estado && v.titularCartao.estado) {
                    return true;
                }
                else {
                    return false;
                }
                ;
            }
            else if (this.pageCount == 3) {
                this.verificaNomeDeUsuario();
                this.verificaSenha();
                this.verificaConfirmacaoSenha();
                this.verificaLinkPaginaWeb();
                if (v.nomeDeUsuario.estado && v.senha.estado && v.confirmacaoSenha.estado && v.linkPaginaWeb.estado) {
                    return true;
                }
                else {
                    return false;
                }
                ;
            }
            ;
        }
        else if (this.tipoDeUsuario == "cliente") {
            if (this.pageCount == 0) {
                this.verificaNome();
                this.verificaDataDeNascimento();
                this.verificaCPF();
                this.verificaEmail();
                this.verificaTelefone();
                if (v.nome.estado && v.cpf.estado && v.dataDeNascimento.estado && v.email.estado && v.telefone.estado) {
                    return true;
                }
                else {
                    return false;
                }
                ;
            }
            else if (this.pageCount == 1) {
                this.verificaRua();
                this.verificaNumero();
                this.verificaComplemento();
                this.verificaBairro();
                this.verificaCidade();
                this.verificaEstado();
                this.verificaCep();
                if (v.rua.estado && v.numero.estado && v.complemento.estado && v.bairro.estado && v.cidade.estado && v.estado.estado, v.cep.estado) {
                    return true;
                }
                else {
                    return false;
                }
                ;
            }
            else if (this.pageCount == 2) {
                this.verificaNomeDeUsuario();
                this.verificaSenha();
                this.verificaConfirmacaoSenha();
                if (v.nomeDeUsuario.estado && v.senha.estado && v.confirmacaoSenha.estado) {
                    return true;
                }
                else {
                    return false;
                }
                ;
            }
            ;
        }
        ;
    };
    ;
    FormCadastroComponent.prototype.ngOnInit = function () {
        //tipo de usuário
        this.userData = JSON.parse(sessionStorage.getItem('userData'));
        this.tipoDeUsuario = sessionStorage.getItem('tipoUsuario');
        console.log(this.tipoDeUsuario);
        if (!this.tipoDeUsuario) {
            this.router.navigate(['/']);
            return;
        }
        else if (this.tipoDeUsuario == 'artesao') {
            this.novoUsuario = this.userDataHandler.newArtesao();
            this.verificadores = this.userDataHandler.newArtesaoVerifiers();
        }
        else if (this.tipoDeUsuario == 'cliente') {
            this.novoUsuario = this.userDataHandler.newCliente();
            this.verificadores = this.userDataHandler.newClienteVerifiers();
        }
        ;
        this.novoUsuario.email = this.userData.email;
        this.novoUsuario.senha = this.userData.senha;
    };
    ;
    return FormCadastroComponent;
}());
FormCadastroComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-form-cadastro',
        template: __webpack_require__(238),
        styles: [__webpack_require__(222)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_request_service__["a" /* RequestService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_data_handler_service__["a" /* UserDataHandlerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_data_handler_service__["a" /* UserDataHandlerService */]) === "function" && _c || Object])
], FormCadastroComponent);

var _a, _b, _c;
//# sourceMappingURL=form-cadastro.component.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Category; });
var Category = (function () {
    function Category(nome, descricao, src) {
        this.nome = nome;
        this.descricao = descricao;
        this.src = src;
    }
    return Category;
}());

//# sourceMappingURL=category-thumbnail.model.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageStartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageStartComponent = (function () {
    function PageStartComponent() {
    }
    PageStartComponent.prototype.ngOnInit = function () {
    };
    return PageStartComponent;
}());
PageStartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-page-start',
        template: __webpack_require__(248),
        styles: [__webpack_require__(232)]
    }),
    __metadata("design:paramtypes", [])
], PageStartComponent);

//# sourceMappingURL=page-start.component.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_request_service__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticationService = (function () {
    function AuthenticationService(requestService) {
        this.requestService = requestService;
        this.data = [];
        this.isUserLogged = false;
    }
    AuthenticationService.prototype.getReady = function () {
        var _this = this;
        this.requestService.get('http://rest.learncode.academy/api/quixique/cadastro').subscribe(function (data) { return _this.data = data; }, function (error) { return console.log(error); });
    };
    ;
    AuthenticationService.prototype.login = function (email, senha) {
        this.getReady();
        for (var user in this.data) {
            if (this.data[user].email == email) {
                if (this.data[user].senha == senha) {
                    this.isUserLogged = true;
                    return this.data[user];
                }
                else {
                    return "wrongPassword";
                }
                ;
            }
            ;
        }
        ;
        return "notFound";
    };
    ;
    AuthenticationService.prototype.isLogged = function () {
        return this.isUserLogged;
    };
    ;
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TelaPrincipalArtesaoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TelaPrincipalArtesaoComponent = (function () {
    function TelaPrincipalArtesaoComponent() {
    }
    TelaPrincipalArtesaoComponent.prototype.ngOnInit = function () {
    };
    TelaPrincipalArtesaoComponent.prototype.mudarVisualizacao = function () {
        var grade = document.getElementsByClassName("glyphicon glyphicon-th-large")[0];
        var lista = document.getElementsByClassName("glyphicon glyphicon-th-list")[0];
        var mudarListaGrade = document.getElementsByClassName("gradeHide")[0];
        var mudarGradeLista = document.getElementsByClassName("listaShow")[0];
        if (grade) {
            grade.className = "glyphicon glyphicon-th-list";
            if (mudarListaGrade) {
                mudarListaGrade.className = "gradeShow";
                mudarGradeLista.className = "listaHide";
            }
        }
        else {
            lista.className = "glyphicon glyphicon-th-large";
            if (!mudarListaGrade) {
                console.log("netrou");
                var mudarListaGrade_1 = document.getElementsByClassName("gradeShow")[0];
                var mudarGradeLista_1 = document.getElementsByClassName("listaHide")[0];
                mudarListaGrade_1.className = "gradeHide";
                mudarGradeLista_1.className = "listaShow";
            }
        }
    };
    return TelaPrincipalArtesaoComponent;
}());
TelaPrincipalArtesaoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tela-principal-artesao',
        template: __webpack_require__(249),
        styles: [__webpack_require__(233)]
    }),
    __metadata("design:paramtypes", [])
], TelaPrincipalArtesaoComponent);

//# sourceMappingURL=tela-principal-artesao.component.js.map

/***/ })

},[527]);
//# sourceMappingURL=main.bundle.js.map