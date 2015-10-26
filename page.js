$(function() {
    var client = new WindowsAzure.MobileServiceClient('https://dev070experience.azure-mobile.net/', 'XYesCQAnFSQPxoVnSjZpJJszEtBOlQ41'),
        todoItemTable = client.getTable('todoitem');

    // Read current data and rebuild UI.
    // If you plan to generate complex UIs like this, consider using a JavaScript templating library.
    function refreshTodoItems() {
        var query = todoItemTable.where({ complete: false });

        query.read().then(function(todoItems) {
           alert(JSON.stringify(todoItems));
           
        }, handleError);
    }

    function handleError(error) {
		alert(JSON.stringify(error));    }
  
    // On initial load, start by fetching the current data
    refreshTodoItems();
});