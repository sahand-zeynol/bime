const FileSaver = require("file-saver");
const XLSX = require("xlsx");

const EXCEL_TYPE =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
const EXCEL_EXTENSION = ".xlsx";

class ExcelService {
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * export custom columns json to Excel file
   *
   * @param json data
   * @param exportColumns export column
   * @param fileName export name
   */
  exportCustomColumnsAsExcelFile(json, exportColumns, fileName) {
    const model = [];
    json.forEach((element) => {
      const el = {};
      for (const key in exportColumns) {
        if (exportColumns[key] in element) {
          let header = exportColumns[key];
          el[header] = element[exportColumns[key]];
        }
      }
      model.push(el);
    });
    this.exportAsExcelFile(model, "report_" + fileName);
  }

  /**
   * export json to Excel file
   *
   * @param json data
   * @param fileName export name
   */
  exportAsExcelFile = (json, fileName) => {
    const worksheet = XLSX.utils.json_to_sheet(json);
    const workbook = {
      Sheets: { data: worksheet },
      SheetNames: ["data"],
      Workbook: { Views: [{ RTL: true }] },
    };
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    this.saveAsExcelFile(excelBuffer, fileName);
  };

  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------

  saveAsExcelFile = (buffer, fileName) => {
    const data = new Blob([buffer], {
      type: EXCEL_TYPE,
    });
    FileSaver.saveAs(
      data,
      fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
    );
  };
}

module.exports = ExcelService;
