class CreateTestRecord < ActiveRecord::Migration
  def change
    Hit.new(address: 'this_is_a_test')
  end
end
