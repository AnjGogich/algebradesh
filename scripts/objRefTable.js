const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Button,
		C3.Plugins.Text,
		C3.Plugins.Mouse,
		C3.Plugins.Keyboard,
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Behaviors.solid,
		C3.Plugins.Audio,
		C3.Plugins.Particles,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.Mouse.Cnds.OnClick,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Acts.SetScale,
		C3.Behaviors.Platform.Acts.SetMaxSpeed
	];
};
self.C3_JsPropNameTable = [
	{меню: 0},
	{начать: 0},
	{инструкция: 0},
	{фонинструкци: 0},
	{инструкциятекст: 0},
	{ПОДТЕКСТ: 0},
	{менюк: 0},
	{Мышь: 0},
	{Клавиатура: 0},
	{выбор: 0},
	{ур1: 0},
	{ур2: 0},
	{ур3: 0},
	{смайл1: 0},
	{смайл2: 0},
	{смайл3: 0},
	{стрелка: 0},
	{стрелка2: 0},
	{стрелка3: 0},
	{менюурв1: 0},
	{Платформер: 0},
	{СледитьЗа: 0},
	{куб: 0},
	{проигр: 0},
	{пр: 0},
	{заного1: 0},
	{Твёрдый: 0},
	{блок: 0},
	{пол: 0},
	{конец: 0},
	{борьер: 0},
	{портал: 0},
	{порталинстр: 0},
	{инстрП: 0},
	{инстрп2: 0},
	{инстрп22: 0},
	{КОНЕЦЦ: 0},
	{СЛЕДУР2: 0},
	{шип: 0},
	{фонур2: 0},
	{полур2: 0},
	{Спрайт: 0},
	{барьер22: 0},
	{борьер24: 0},
	{заного2: 0},
	{ШИПУР2: 0},
	{КОНЕЦЦ2: 0},
	{НАЧАТЬУр1: 0},
	{инстрЕ: 0},
	{ИНСТРШИП: 0},
	{Аудио: 0},
	{Частицы: 0}
];

self.InstanceType = {
	меню: class extends self.ITiledBackgroundInstance {},
	начать: class extends self.IButtonInstance {},
	инструкция: class extends self.IButtonInstance {},
	фонинструкци: class extends self.ITiledBackgroundInstance {},
	инструкциятекст: class extends self.ITextInstance {},
	ПОДТЕКСТ: class extends self.ITiledBackgroundInstance {},
	менюк: class extends self.IButtonInstance {},
	Мышь: class extends self.IInstance {},
	Клавиатура: class extends self.IInstance {},
	выбор: class extends self.ITiledBackgroundInstance {},
	ур1: class extends self.IButtonInstance {},
	ур2: class extends self.IButtonInstance {},
	ур3: class extends self.IButtonInstance {},
	смайл1: class extends self.ITiledBackgroundInstance {},
	смайл2: class extends self.ITiledBackgroundInstance {},
	смайл3: class extends self.ITiledBackgroundInstance {},
	стрелка: class extends self.ISpriteInstance {},
	стрелка2: class extends self.ISpriteInstance {},
	стрелка3: class extends self.ISpriteInstance {},
	менюурв1: class extends self.ITiledBackgroundInstance {},
	куб: class extends self.ISpriteInstance {},
	проигр: class extends self.ITiledBackgroundInstance {},
	пр: class extends self.ITextInstance {},
	заного1: class extends self.IButtonInstance {},
	блок: class extends self.ISpriteInstance {},
	пол: class extends self.ISpriteInstance {},
	конец: class extends self.ISpriteInstance {},
	борьер: class extends self.ISpriteInstance {},
	портал: class extends self.ISpriteInstance {},
	порталинстр: class extends self.ITiledBackgroundInstance {},
	инстрП: class extends self.ITextInstance {},
	инстрп2: class extends self.ITiledBackgroundInstance {},
	инстрп22: class extends self.ITextInstance {},
	КОНЕЦЦ: class extends self.ISpriteInstance {},
	СЛЕДУР2: class extends self.IButtonInstance {},
	шип: class extends self.ISpriteInstance {},
	фонур2: class extends self.ITiledBackgroundInstance {},
	полур2: class extends self.ITiledBackgroundInstance {},
	Спрайт: class extends self.ISpriteInstance {},
	барьер22: class extends self.ISpriteInstance {},
	борьер24: class extends self.ISpriteInstance {},
	заного2: class extends self.IButtonInstance {},
	ШИПУР2: class extends self.ISpriteInstance {},
	КОНЕЦЦ2: class extends self.ISpriteInstance {},
	НАЧАТЬУр1: class extends self.IButtonInstance {},
	инстрЕ: class extends self.ITextInstance {},
	ИНСТРШИП: class extends self.ITextInstance {},
	Аудио: class extends self.IInstance {},
	Частицы: class extends self.IParticlesInstance {}
}