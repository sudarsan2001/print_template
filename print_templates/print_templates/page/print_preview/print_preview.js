let isPreviewPage
frappe.pages['print-preview'].on_page_load = async function(wrapper) {
	
	await frappe.require([
		"print_preview.bundle.js"
	]);
	isPreviewPage = new print_templates.pages.PreviewPage(wrapper, "print-preview");

	
}