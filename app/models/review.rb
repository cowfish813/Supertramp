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
class Review < ApplicationRecord
    belongs_to :listing
    # foreign_key: :listing_id

    belongs_to :author,
    foreign_key: :user_id,
    class_name: :User
    
end
