// * ———————————————————————————————————————————————————————— * //
// *    Partial helper
// *	Loads a partial dynamically by name. This allows to define the structure of a page in a cms file.
// *	Usage:
// *
// *	{{partial 'partial name'}}
// *
// * ———————————————————————————————————————————————————————— * //
__templating_engine.registerHelper('partial', function (name, context, options) {

	if (!options) {
		options = context
		context = this
	}

	// Get the partial with the given name. This is a string.
	var partial = __templating_engine.partials[name]

	// Return empty string if the partial is not defined
	if (!partial) return ''

	// build up context
	context.global = options.data.root.global

	// Compile and call the partial with context
	return (typeof partial == 'function')
		? new __templating_engine.SafeString(partial(context))
		: new __templating_engine.SafeString(__templating_engine.compile(partial)(context))

})
