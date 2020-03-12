# == Schema Information
#
# Table name: listings
#
#  id                  :bigint           not null, primary key
#  cancellation_policy :string           not null
#  capacity            :integer          not null
#  checkin             :datetime
#  checkout            :datetime
#  country             :string           not null
#  description         :text             not null
#  lat                 :float
#  lng                 :float
#  minimum_nights      :integer          not null
#  name                :string           not null
#  on_arrival          :string           not null
#  price               :integer          not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  host_id             :integer
#
# Indexes
#
#  index_listings_on_host_id  (host_id)
#
require 'test_helper'

class ListingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
