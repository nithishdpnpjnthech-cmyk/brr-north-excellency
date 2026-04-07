function doPost(e) {
  try {
    // 1. Get the current active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // 2. Extract parameters sent from the website
    // (We use e.parameter to get form data from POST request)
    var fname = e.parameter.fname || "N/A";
    var mobile = e.parameter.mobile || "N/A";
    var email = e.parameter.email || "N/A";
    var project = e.parameter.enqproject || "N/A";
    var source = e.parameter.source || "N/A";
    var formId = e.parameter.formId || "N/A";
    var pageUrl = e.parameter.pageUrl || "N/A";
    var submittedAt = e.parameter.submittedAt || new Date().toISOString();
    
    // 3. Prepare the row data based on column headers
    var rowData = [
      submittedAt, 
      fname, 
      mobile, 
      email, 
      project, 
      source, 
      formId, 
      pageUrl
    ];
    
    // 4. Append row to Google Sheet
    sheet.appendRow(rowData);
    
    // 5. Setup Email Notification
    var recipient = "keerthudarshu06@gmail.com";
    var subject = "New Lead Generated - BRR North Excellency (" + source + ")";
    
    // Create professional formatted email body
    var body = "Hi Team,\n\nWe have received a new lead on the website! Here are the details:\n\n" +
               "👤 Name: " + fname + "\n" +
               "📞 Mobile: " + mobile + "\n" +
               "✉️ Email: " + email + "\n" +
               "🏢 Interested In: " + project + "\n" +
               "📌 Source: " + source + "\n" +
               "🆔 Form ID: " + formId + "\n" +
               "🔗 Page URL: " + pageUrl + "\n" +
               "📅 Submitted At: " + submittedAt + "\n\n" +
               "Please reach out to them at your earliest convenience.\n\n" +
               "Best regards,\nYour Automated Website System";
               
    // Send standard text email
    MailApp.sendEmail(recipient, subject, body);
    
    // 6. Return a Success response back to the website
    return ContentService
      .createTextOutput(JSON.stringify({ "result": "success", "row": rowData }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return Error response back to the website in case something goes wrong
    return ContentService
      .createTextOutput(JSON.stringify({ "result": "error", "error": error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Helper function to setup table headers.
// You can run this function ONCE inside the Apps Script Editor to set up the Columns.
function setupSheet() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var headers = ["Timestamp", "Name", "Mobile", "Email", "Project Status", "Source Map", "Form ID", "Page URL"];
  
  // Clear everything and set headers
  sheet.clear();
  sheet.appendRow(headers);
  sheet.setFrozenRows(1);
  sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold").setBackground("#4069e3").setFontColor("white");
}
