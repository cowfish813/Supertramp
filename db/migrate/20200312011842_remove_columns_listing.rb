class RemoveColumnsListing < ActiveRecord::Migration[5.2]
  def change
    remove_column :listings, :image_url
    remove_column :listings, :image_file
    remove_column :listings, :photos
  end
end
