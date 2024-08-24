import { createApp } from "vue";
import { routes } from "./router";
import { createRouter, createWebHistory } from "vue-router";
import PrintPreviewApp from "./PrintPreviewApp.vue"

class PreviewPage {
    constructor(wrapper, pageName) {
        this.pageName = pageName;
        this.wrapperId = `#${wrapper.id}`;
        this.setTitle();
        this.show();
    }
    createRouter() {
        const history = createWebHistory("/app/print-preview");

        history.listen(to => {
            if (frappe.get_route_str().startsWith(this.pageName)) return;

            frappe.route_flags.replace_route = true;
            frappe.router.push_state(to);
            this.router.listening = false;
        });
        console.log("routes")
        console.log(routes)
        return createRouter({
            history: history,
            routes: routes,
        });
    }

    setTitle() {
        frappe.utils.set_title(__("Print Preview"));
    }
    mountVueApp() {
        this.router = this.createRouter();
        this.app = createApp(PrintPreviewApp).use(this.router);
        SetVueGlobals(this.app);
        this.router.isReady().then(() => this.app.mount(this.wrapperId));
    }

    show() {
        this.mountVueApp();

        $(frappe.pages[this.pageName]).on("show", () => {
            this.router.listening = true;
            this.setTitle();
            this.router.replace(frappe.router.current_route.slice(1).join("/") || "/");
        });
    }
}
frappe.provide("print_templates.pages")
print_templates.pages.PreviewPage = PreviewPage;