class CreateReview < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :listing_id, null: false
      t.string :title
      t.text :body
      t.boolean :recommended, null: false
      t.timestamps
    end
    add_index :reviews, :listing_id
    add_index :reviews, :user_id
  end
end

