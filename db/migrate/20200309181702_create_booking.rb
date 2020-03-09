class CreateBooking < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :listing_id, null: false
      t.integer :host_id, null: false
      t.integer :user_id 
      t.integer :capacity, null: false
      t.datetime :check_in, null: false
      t.datetime :check_out, null: false
    end
    add_index :bookings, :listing_id
    add_index :bookings, :user_id
    add_index :bookings, :host_id
  end
end
