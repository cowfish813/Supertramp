class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.integer :host_id
      t.string :name, null: false
      t.text :description, null: false
      t.float :lat
      t.float :lng
      t.string :country, null: false
      t.integer :price, null: false
      t.integer :capacity, null: false
      t.datetime :checkin
      t.datetime :checkout
      t.string :cancellation_policy, null: false
      t.string :on_arrival, null: false
      t.integer :minimum_nights, null: false

      t.timestamps
    end
    add_index :listings, :host_id
  end
end
