class TestRecord2 < ActiveRecord::Migration
  def change
    Hit.new(address: 'this_is_a_test').save!
  end
end
