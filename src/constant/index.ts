export const tb_raw_material = {
  table_name: "tb_raw_material",
  columns: [
    "raw_material_name",
    "raw_material_index",
    "raw_material_price",
    "raw_meterial_conventional",
    "raw_material_specification",
  ],
};

export const tb_product = {
  table_name: "tb_product",
  columns: [
    "product_name",
    "product_index",
    "product_code",
    "product_color",
    "product_processing_cost",
    "product_accounting_quantity",
    "product_series_id",
    "product_factory_name",
    "product_remarks",
  ],
};

export const tb_product_series = {
  table_name: "tb_product_series",
  columns: ["product_series_name", "product_series_function"],
};

export const tb_filter_cake = {
  table_name: "tb_filter_cake",
  columns: [
    "filter_cake_name",
    "filter_cake_index",
    "filter_cake_color",
    "filter_cake_processing_cost",
    "filter_cake_accounting_quantity",
    "filter_cake_specification",
    "filter_cake_remarks",
  ],
};

export const rel_p_rm = {
  table_name: "rel_p_rm",
  columns: ["product_id", "raw_material_id", "inventory"],
};

export const rel_p_fc = {
  table_name: "rel_p_fc",
  columns: ["product_id", "filter_cake_id", "inventory"],
};

export const rel_fc_fc = {
  table_name: "rel_fc_fc",
  columns: ["filter_cake_id", "filter_cake_id_used", "inventory"],
};

export const rel_date_rm = {
  table_name: "rel_date_rm",
  columns: ["raw_material_id", "raw_material_date", "price"],
};

export const rel_date_fc = {
  table_name: "rel_date_fc",
  columns: ["filter_cake_id", "filter_cake_date", "price"],
};

export const rel_rm_fc = {
  table_name: "rel_rm_fc",
  columns: ["filter_cake_id", "raw_material_id", "inventory"]
}