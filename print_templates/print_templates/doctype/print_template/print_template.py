# Copyright (c) 2024, Aerele Technologies Pvt Ltd. and contributors
# For license information, please see license.txt

import frappe, json
from frappe.model.document import Document
from frappe.www.printview import get_rendered_template


class PrintTemplate(Document):
	pass

@frappe.whitelist()
def render_print(doctype, json_data):
	doc = frappe.get_doc("Sales Invoice", "SINV-24-00001")
	print_format = frappe._dict(json.loads(json_data))
	html = get_rendered_template(doc=doc,print_format = print_format, meta=None, trigger_print=False, no_letterhead = 0, letterhead = None, settings=None)
	print(html)
	return print_format
