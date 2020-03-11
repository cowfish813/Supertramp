# == Schema Information
#
# Table name: photos
#
#  id         :bigint           not null, primary key
#  url        :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  listing_id :integer
#  user_id    :integer
#
# Indexes
#
#  index_photos_on_listing_id  (listing_id)
#  index_photos_on_user_id     (user_id)
#
require 'test_helper'

class PhotoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
