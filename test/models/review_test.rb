# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  body        :text
#  recommended :boolean          not null
#  title       :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  listing_id  :integer          not null
#  user_id     :integer          not null
#
# Indexes
#
#  index_reviews_on_listing_id  (listing_id)
#  index_reviews_on_user_id     (user_id)
#
require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
