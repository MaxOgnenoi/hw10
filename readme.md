# Express.js API

This is a simple Express.js API that provides endpoints to manage items.

## Getting Started

### Prerequisites

- Node.js (version X.X.X)
- npm (version X.X.X)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/maksymohnenyi/HW-week10.git

API Documentation
List of Items
Endpoint: GET /items
Description: Retrieves a list of items.
Response: An array of items in JSON format.
Add an Item
Endpoint: POST /items
Description: Adds a new item to the list.
Request Body: JSON object with name and price fields.
Response: The added item with a generated ID in JSON format.
Get an Item
Endpoint: GET /items/:id
Description: Retrieves a specific item by ID.
Parameters: id - ID of the item.
Response: The item with the given ID in JSON format.
Update an Item
Endpoint: PUT /items/:id
Description: Updates a specific item by ID.
Parameters: id - ID of the item.
Request Body: JSON object with name and price fields.
Response: The updated item in JSON format.
Delete an Item
Endpoint: DELETE /items/:id
Description: Deletes a specific item by ID.
Parameters: id - ID of the item.
Response: The deleted item in JSON format.