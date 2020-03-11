class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.integer :listing_id 
      t.integer :user_id
      t.string :url
      t.timestamps
    end
    add_index :photos, :listing_id
    add_index :photos, :user_id
  end
end
