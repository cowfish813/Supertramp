class AddColumnsToListing < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :image_url, :string
    add_column :listings, :image_file, :string
    add_column :listings, :photos, :string, array: true, default: []
  end
end
