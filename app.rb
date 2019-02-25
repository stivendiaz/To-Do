require 'sinatra'
require 'make_todo'

get '/' do 
    @tareas = Tarea.all
    puts @tareas
    erb :index
end

post '/tarea/new' do
  @tarea = Tarea.create(params[:task])
   redirect '/'
 end

post '/done/:id' do 
Tarea.update(params[:id])
end 

delete '/tarea/:id' do
  @tarea = Tarea.destroy(params[:id])
  redirect '/hecha'
end
