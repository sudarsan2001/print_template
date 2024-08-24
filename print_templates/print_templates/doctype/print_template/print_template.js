// Copyright (c) 2024, Aerele Technologies Pvt Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on("Print Template", {
	refresh:function(frm) {
        frappe.call({
			method: "print_templates.print_templates.doctype.print_template.print_template.render_print",
			args: {
				doctype :cur_frm.doc.document_name,
                json_data : cur_frm.doc.json_muck
			},
			callback: function(r){
                if(r.message){
                   
                    var html = `<div class="print-preview-wrapper"><div class="print-preview">`
				html += `<div class="print-format-skeleton">
    <div class="skeleton-header">
        <div class="letter-head row skeleton-section">
            <div class="col-xs-4">
                <div class="skeleton-card dark large"></div>
            </div>
        </div>
        <div class="print-heading skeleton-section">
            <div class="row">
                <div class="col-xs-5">
                    <div class="skeleton-card dark large"></div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3"> <small class="sub-heading"> <div class="skeleton-card light"></div> </small> </div>
            </div>
        </div>
    </div>
    <div class="skeleton-body">
        <div class="row skeleton-section">
            <div class="col-xs-6 column-break">
                <div class="row">
                    <div class="col-xs-6">
                        <div class="skeleton-card dark"></div>
                    </div>
                    <div class="col-xs-6">
                        <div class="skeleton-card light"></div>
                    </div>
                </div>
            </div>
            <div class="col-xs-6 column-break">
                <div class="row">
                    <div class="col-xs-5">
                        <div class="skeleton-card light pull-right" style="width: 85%;"></div>
                    </div>
                    <div class="col-xs-7">
                        <div class="skeleton-card light pull-right" style="width: 75%;"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="skeleton-section">
            <div class="skeleton-table">
                <div class="skeleton-table-header">
                    <div class="skeleton-table-row">
                        <div class="skeleton-table-column" style="width: 3%;">
                            <div class="skeleton-card dark"></div>
                        </div>
                        <div class="skeleton-table-column" style="width: 17%;">
                            <div class="skeleton-card dark" style="width: 75%;"></div>
                        </div>
                        <div class="skeleton-table-column" style="width: 20%;">
                            <div class="skeleton-card dark" style="width: 75%;"></div>
                        </div>
                        <div class="skeleton-table-column" style="width: 28%;">
                            <div class="skeleton-card dark pull-right" style="width: 90%;"></div>
                        </div>
                        <div class="skeleton-table-column" style="width: 12%;">
                            <div class="skeleton-card dark pull-right" style="width: 100%;"></div>
                        </div>
                        <div class="skeleton-table-column" style="width: 20%;">
                            <div class="skeleton-card dark pull-right" style="width: 70%;"></div>
                        </div>
                    </div>
                </div>
                <div class="skeleton-table-body">
                    <div class="skeleton-table-row">
                        <div class="skeleton-table-column" style="width: 3%;">
                            <div class="skeleton-card light"></div>
                        </div>
                        <div class="skeleton-table-column" style="width: 17%;">
                            <div class="skeleton-card light" style="width: 75%;"></div>
                        </div>
                        <div class="skeleton-table-column" style="width: 20%;">
                            <div class="skeleton-card light" style="width: 100%;"></div>
                        </div>
                        <div class="skeleton-table-column" style="width: 28%;">
                            <div class="skeleton-card light pull-right" style="width: 50%;"></div>
                        </div>
                        <div class="skeleton-table-column" style="width: 12%;">
                            <div class="skeleton-card light pull-right" style="width: 80%;"></div>
                        </div>
                        <div class="skeleton-table-column" style="width: 20%;">
                            <div class="skeleton-card dark pull-right" style="width: 100%;"></div>
                        </div>
                    </div>
                    <div class="skeleton-table-row">
                        <div class="skeleton-table-column" style="width: 3%;">
                            <div class="skeleton-card light"></div>
                        </div>
                        <div class="skeleton-table-column" style="width: 17%;">
                            <div class="skeleton-card light" style="width: 75%;"></div>
                        </div>
                        <div class="skeleton-table-column" style="width: 20%;">
                            <div class="skeleton-card light" style="width: 100%;"></div>
                        </div>
                        <div class="skeleton-table-column" style="width: 28%;">
                            <div class="skeleton-card light pull-right" style="width: 50%;"></div>
                        </div>
                        <div class="skeleton-table-column" style="width: 12%;">
                            <div class="skeleton-card light pull-right" style="width: 80%;"></div>
                        </div>
                        <div class="skeleton-table-column" style="width: 20%;">
                            <div class="skeleton-card dark pull-right" style="width: 100%;"></div>
                        </div>
                    </div>
                    <div class="skeleton-table-row">
                        <div class="skeleton-table-column" style="width: 3%;">
                            <div class="skeleton-card light"></div>
                        </div>
                        <div class="skeleton-table-column" style="width: 17%;">
                            <div class="skeleton-card light" style="width: 75%;"></div>
                        </div>
                        <div class="skeleton-table-column" style="width: 20%;">
                            <div class="skeleton-card light" style="width: 100%;"></div>
                        </div>
                        <div class="skeleton-table-column" style="width: 28%;">
                            <div class="skeleton-card light pull-right" style="width: 50%;"></div>
                        </div>
                        <div class="skeleton-table-column" style="width: 12%;">
                            <div class="skeleton-card light pull-right" style="width: 80%;"></div>
                        </div>
                        <div class="skeleton-table-column" style="width: 20%;">
                            <div class="skeleton-card dark pull-right" style="width: 100%;"></div>
                        </div>
                    </div>
                    <div class="skeleton-table-row">
                        <div class="skeleton-table-column" style="width: 3%;">
                            <div class="skeleton-card light"></div>
                        </div>
                        <div class="skeleton-table-column" style="width: 17%;">
                            <div class="skeleton-card light" style="width: 75%;"></div>
                        </div>
                        <div class="skeleton-table-column" style="width: 20%;">
                            <div class="skeleton-card light" style="width: 100%;"></div>
                        </div>
                        <div class="skeleton-table-column" style="width: 28%;">
                            <div class="skeleton-card light pull-right" style="width: 50%;"></div>
                        </div>
                        <div class="skeleton-table-column" style="width: 12%;">
                            <div class="skeleton-card light pull-right" style="width: 80%;"></div>
                        </div>
                        <div class="skeleton-table-column" style="width: 20%;">
                            <div class="skeleton-card dark pull-right" style="width: 100%;"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="skeleton-section">
            <div class="row">
                <div class="col-xs-6"></div>
                <div class="col-xs-6">
                    <div class="row">
                        <div class="col-xs-5">
                            <div class="skeleton-card light"></div>
                        </div>
                        <div class="col-xs-7">
                            <div class="skeleton-card dark pull-right" style="width: 80%;"></div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-5">
                            <div class="skeleton-card light" style="width: 80%;"> </div>
                        </div>
                        <div class="col-xs-7">
                            <div class="skeleton-card dark pull-right" style="width: 60%;"> </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-5">
                            <div class="skeleton-card light" style="width: 80%;"></div>
                        </div>
                        <div class="col-xs-7 text-right">
                            <div class="skeleton-card dark pull-right" style="width: 60%;"> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="skeleton-section">
            <div class="row">
                <div class="col-xs-6"></div>
                <div class="col-xs-6">
                    <div class="row">
                        <div class="col-xs-5">
                            <div class="skeleton-card light"></div>
                        </div>
                        <div class="col-xs-7">
                            <div class="skeleton-card dark pull-right" style="width: 80%;"></div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-5">
                            <div class="skeleton-card light" style="width: 90%;"> </div>
                        </div>
                        <div class="col-xs-7">
                            <div class="skeleton-card dark pull-right" style="width: 60%;"> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="skeleton-footer">
        <div class="skeleton-card dark large" style="width: 45%;"></div>
        <div class="skeleton-card light" style="width: 60%;"></div>
        <div class="skeleton-card light" style="width: 35%;"></div>
        <div class="skeleton-card light" style="width: 35%;"></div>
    </div>
</div>`
				html += `<iframe class="print-format-container" width="100%" height="0" frameBorder="0" scrolling="no">`
                var ren = frappe.render_template(r.message,{});
                html += ren
				html += `</iframe>
			</div>
			<div class="page-break-message text-muted text-center text-medium margin-top"></div>
		</div>
		<div class="preview-beta-wrapper">
			<iframe width="100%" height="0" frameBorder="0"></iframe>
		</div>
		`
        
        // console.log(r.message)
                    html = ```<!DOCTYPE html>
<html>
<head>
    <style>
        .designer-element {
            position: absolute;
            box-sizing: border-box;
        }
    </style>
</head>
<body>
    <div id="print-designer"></div>

    <script>
        // Assuming the JSON is stored in a variable called printDesignerBody
        const printDesignerBody = JSON.parse(``);

        const container = document.getElementById('print-designer');

        function renderElement(element, parent) {
            const el = document.createElement('div');
            el.classList.add('designer-element');

            // Set position and size
            el.style.left = '${element.pageX}px';
            el.style.top = '${element.pageY}px';
            el.style.width = '${element.width}px';
            el.style.height = '${element.height}px';

            // Apply styles
            for (const [key, value] of Object.entries(element.style || {})) {
                el.style[key] = value;
            }

            // Handle different element types
            if (element.type === 'text') {
                el.innerHTML = element.dynamicContent?.map(dc => dc.value).join('') || '';
            } else if (element.type === 'table') {
                // Render table based on dynamicContent and columns
                const table = document.createElement('table');
                // Build table header
                const thead = document.createElement('thead');
                const headerRow = document.createElement('tr');
                element.columns.forEach(col => {
                    const th = document.createElement('th');
                    th.textContent = col.label;
                    headerRow.appendChild(th);
                });
                thead.appendChild(headerRow);
                table.appendChild(thead);
                // Placeholder for table body
                const tbody = document.createElement('tbody');
                table.appendChild(tbody);
                el.appendChild(table);
            }

            parent.appendChild(el);

            // Recursively render child elements
            (element.childrens || []).forEach(child => {
                renderElement(child, el);
            });
        }

        // Start rendering from the root elements
        printDesignerBody.forEach(page => {
            renderElement(page, container);
        });
    </script>
</body>
</html>
```
                    var wrapper = frm.get_field("html_view").$wrapper
                    let print_view = new frappe.ui.form.PrintView(wrapper);
                    $(wrapper).bind("show", () => {
                        const route = frappe.get_route();
                        const doctype = "Sales Invoice"
                        const docname = "SINV-24-00002"
                        if (!frappe.route_options || !frappe.route_options.frm) {
                            frappe.model.with_doc(doctype, docname, () => {
                                let frm = { doctype: doctype, docname: docname };
                                frm.doc = frappe.get_doc(doctype, docname);
                                frappe.model.with_doctype(doctype, () => {
                                    frm.meta = frappe.get_meta("Sales Invoice");
                                    print_view.show(frm);
                                });
                            });
                        } else {
                            print_view.frm = frappe.route_options.frm.doctype
                                ? frappe.route_options.frm
                                : frappe.route_options.frm.frm;
                            frappe.route_options.frm = null;
                            print_view.show(print_view.frm);
                        }
                    });

                }
            }
        })
        
	},
});

