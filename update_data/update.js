const dbConnect = require('./mongodb');

const updateData = async () => {
  try {
    let data = await dbConnect();
    let result = await data.updateOne(
      { name: 'max 5' }, // Filter condition
      {
        $set: { name: 'max pro 5', price: 1000 } // Update operation
      }
    );

    if (result.matchedCount > 0) {
      console.log("Data is updated");
    } else {
      console.log("No documents matched the query. No updates were made.");
    }
  } catch (error) {
    console.error('Error updating data:', error);
  }
};

updateData();
