let BookInstance = require("../models/bookinstance");

exports.show_all_books_status = function (res) {
  BookInstance.find(
    { status: "available" },
    "title status",
    function (err, bookInstances) {
      if (err) {
        return next(err);
      }
      res.send(bookInstances);
    }
  );
};
