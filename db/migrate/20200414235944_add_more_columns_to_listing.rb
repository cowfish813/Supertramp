class AddMoreColumnsToListing < ActiveRecord::Migration[5.2]
  # misnamed 
  def change
    add_column :bookings, :listing_name, :string
    add_column :bookings, :price, :integer
  end
end
