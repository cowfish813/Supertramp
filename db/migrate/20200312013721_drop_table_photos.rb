class DropTablePhotos < ActiveRecord::Migration[5.2]
  def change
    drop_table :photos
  end
end
