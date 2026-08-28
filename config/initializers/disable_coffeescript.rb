Rails.application.config.assets.configure do |env|
  env.unregister_mime_type 'text/coffeescript'
  env.unregister_transformer 'text/coffeescript', 'application/javascript'
end